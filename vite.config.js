import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@uswds-img": path.resolve(
        __dirname,
        "./node_modules/@uswds/uswds/dist/img",
      ),
    },
  },
  assetsInclude: ["node_modules/@uswds/uswds/dist/img/**/*"],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        loadPaths: ["node_modules/@uswds/uswds/packages"],
      },
    },
  },
});
