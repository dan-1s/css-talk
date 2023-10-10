import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
    server: {
        hmr: {
            port: 443,
        },
    },
    plugins: [svelte()],
});
