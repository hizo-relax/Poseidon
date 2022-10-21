import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
		alias: [
            { find: 'markdown', replacement: path.resolve(__dirname, './markdown') }
        ]
	},
    plugins: [vue()],
})