import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // expect などをグローバルで使えるようにする
        environment: 'jsdom', // ブラウザ環境をシミュレート
        setupFiles: './src/tests/setupTests.js' // 後述の初期設定ファイル
    },
});
