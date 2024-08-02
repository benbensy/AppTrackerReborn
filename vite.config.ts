import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";
import vueComponents from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import unoCSS from 'unocss/vite'
import tsconfigPaths from "vite-tsconfig-paths";
import customTheme from "./custom-theme";

const currentDir = fileURLToPath(dirname(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      resolvers: [ArcoResolver()],
    }),
    vueComponents({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
          importStyle: false,
        }),
      ],
    }),
    unoCSS(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(currentDir, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: customTheme,
        javascriptEnabled: true,
      },
    },
  },
});
