/*
 * @Author: mfxhb
 * @Date: 2022-11-29 09:58:01
 * @LastEditTime: 2022-11-29 12:56:30
 * @Description:
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    server: {
      host: false,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~": path.resolve(__dirname, "."),
      },
    },
    plugins: [uni()],
  };
});
