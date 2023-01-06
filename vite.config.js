import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            { find: 'markdown', replacement: path.resolve(__dirname, './markdown') },
            { find: 'src', replacement: path.resolve(__dirname, './src') },
        ]
    },
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            // 导入scss预编译程序
            scss: {
                additionalData: `@use "src/theme" as *; @use "src/theme/color-map" as *;`,
            },
        },
    },
})