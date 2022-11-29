/*
 * @Author: mfxhb
 * @Date: 2022-11-29 13:46:59
 * @LastEditTime: 2022-11-29 15:40:48
 * @Description:
 */
import "@vue/runtime-core";
import { $u } from "./uview.u";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $u: $u;
  }
}
