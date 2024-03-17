import { defineConfig } from 'vite'
import dlight from "vite-plugin-dlight"
import tailwindcss from "tailwindcss"

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                tailwindcss,
            ],
        }
    },

    plugins: [
        dlight({ files: "**/*.{view,model}.js" })
    ]
});