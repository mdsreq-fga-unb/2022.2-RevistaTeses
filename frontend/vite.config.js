import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
		globals: true,
		setupFiles: ["vitest-localstorage-mock"],
		environment: "jsdom",
		coverage: {
			provider: "istanbul",
			exclude: ["**/node_modules/**", "**/dist/**", "<rootDir>/src/tests/"],
		},
	},
})
