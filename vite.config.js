import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import sitemapPlugin from 'vite-plugin-sitemap';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(), sitemapPlugin({
        baseUrl: 'https://www.bunkadojo.com',
        routes: [
            { path: '/', priority: 1.0 },

        ],
    })],
    resolve: {
        alias: {
            "~": resolve(__dirname, "src"),
            "@sass": resolve(__dirname, "src/styles"),
        },
    },
    server: {
        allowedHosts: true,
    },


});
