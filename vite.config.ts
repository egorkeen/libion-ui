import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      routes: path.resolve(__dirname, "src/routes"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      utils: path.resolve(__dirname, "src/utils"),
      "utils/types": path.resolve(__dirname, "src/utils/types"),
      "utils/constants": path.resolve(__dirname, "src/utils/constants"),
      "utils/hooks": path.resolve(__dirname, "src/utils/hooks"),
      "utils/helpers": path.resolve(__dirname, "src/utils/helpers"),
      "utils/transformers": path.resolve(__dirname, "src/utils/transformers"),
      assets: path.resolve(__dirname, "src/assets"),
      store: path.resolve(__dirname, "src/store"),
    },
  },
});
