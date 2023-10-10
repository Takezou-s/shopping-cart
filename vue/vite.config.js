import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "unplugin-vue-components/resolvers";
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["jquery"],
  },
  plugins: [
    vue(),
    inject({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
});
