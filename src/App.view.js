import { View, Watch, select } from "@dlightjs/dlight"
import './app.css'

@App
@View
class App {
    docment_type = 'text/html'
    indent_character = ' '
    indent_size = 4
    elements = ''
    dsl = ''

    @Watch('elements', 'indent_character', 'indent_size')
    watchElements() {
        this.traverse(new DOMParser().parseFromString(this.elements, this.docment_type).body)
    }

    traverse(node, level = 0) {
        console.log(node.attributes)
        let indent = this.indent_character.repeat(this.indent_size * level)
        if (node.nodeName == 'BODY') {
            this.dsl = 'Body()\n'
        } else if (node.nodeName == '#text' && /^\s+$/.test(node.nodeValue)) {
        } else if (node.nodeName == '#text') {
            this.dsl += indent + '"' + node.textContent + '"\n'
        } else {
            this.dsl += indent + node.nodeName.toLowerCase() + '()\n'
            if(node.attributes.length){
                for (let i = 0; i < node.attributes.length; i++)
                {
                    this.dsl += indent + '.' + node.attributes[i].name + '("' + node.attributes[i].value + '")\n'
                }
            }
        }
        if (node.hasChildNodes()) {
            this.dsl += indent + '{\n'
            for (let i = 0; i < node.childNodes.length; i++)
            {
                this.traverse(node.childNodes[i], level + 1)
            }
            this.dsl += indent + '}\n'
        }
    }

    Body() {
        div().class('min-h-screen flex flex-col')
        {
            div().class('text-center p-5')
            {
                h1('ToDLight').class('text-5xl')
                p('Convert HTML(XML or SVG) to DLight DSL').class('text-sm')
            }
            div().class('grow flex space-x-5 p-5')
            {
                div().class('grow flex flex-col space-y-5')
                {
                    div().class('space-x-5')
                    {
                        select().class('select select-bordered')
                            .onChange((event) => { this.docment_type = event.target.value })
                        {
                            option('HTML').value('text/html').selected(this.docment_type == 'text/html')
                            option('XML').value('text/xml').selected(this.docment_type == 'text/xml')
                            option('SVG').value('image/svg+xml').selected(this.docment_type == 'image/svg+xml')
                        }
                    }
                    div().class('grow')
                    {
                        textarea()
                            .class('w-full h-full textarea textarea-bordered')
                            .placeholder('Paste HTML code')
                            .value(this.elements)
                            .oninput((event) => { this.elements = event.target.value })
                    }
                }
                div().class('shrink self-center')
                {
                    span('›').class('text-gray-400 text-2xl')
                }
                div().class('grow flex flex-col space-y-5')
                {
                    div().class('space-x-5')
                    {
                        select().class('select select-bordered')
                            .onChange((event) => { this.indent_size = event.target.value })
                        {
                            for (const index of [1, 2, 3, 4, 5, 6, 7, 8]) {
                                option('Indent by ' + index).value(index).selected(this.indent_size == index)
                            }
                        }
                        select().class('select select-bordered')
                            .onChange((event) => { this.indent_character = event.target.value })
                        {
                            option('Space').value(' ').selected(this.indent_character == ' ')
                            option('Tab').value('	').selected(this.indent_character == '	')
                        }
                    }
                    div().class('grow')
                    {
                        textarea(this.dsl)
                            .class('w-full h-full textarea textarea-bordered')
                            .placeholder('DLight DSL Code')
                    }
                }
            }
            div().class('')
        }
    }
}