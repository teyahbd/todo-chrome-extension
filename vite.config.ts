import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/manifest.json",
          dest: ".",
        },
        {
          src: "src/assets/*",
          dest: "assets",
        },
      ],
    }),
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: "./src/main.tsx",
      },
      output: {
        entryFileNames: "bundle.js",
        assetFileNames: (chunk) => {
          if (chunk.name && chunk.name.endsWith(".css")) {
            return "bundle.css";
          }
          return "assets/[name].[ext]";
        },
      },
    },
  },
});
