/*
 * @Author: mfxhb
 * @Date: 2022-11-29 09:58:01
 * @LastEditTime: 2022-11-29 16:22:19
 * @Description:
 */
import { createSSRApp } from "vue";
import App from "./App.vue";

import uviewPlus from "uview-plus";
import installHttp from "@/request/request";
import { Pinia } from "./plugins/pinia/pinia";

export function createApp() {
  const app = createSSRApp(App);
  installHttp(uni);

  app.use(Pinia);
  app.use(uviewPlus);

  return {
    app,
  };
}
