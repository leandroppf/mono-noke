import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ entryRoot: "./src/lib", insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "haku-ui",
      formats: ["es", "umd"],
      fileName: (format) => `haku-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
