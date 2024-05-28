import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: false, // auto import if true
    environment: "jsdom", // as we want to run test in dom and not in node.
    setupFiles: "./setupTests.js", // Run all tests in this file, it can also accept array of file names
  },
});
