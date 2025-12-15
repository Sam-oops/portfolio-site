import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "emmet.syntaxProfiles": {
        jsx: {
          "markup.attributes": {
            "class*": "className",
          },
          "markup.valuePrefix": {
            "class*": "styles",
          },
        },
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
