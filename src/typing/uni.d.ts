/*
 * @Author: mfxhb
 * @Date: 2022-11-29 13:03:52
 * @LastEditTime: 2022-11-29 15:40:22
 * @Description:
 */

import "@dcloudio/types/uni-app";

import { $u } from "./uview.u";

declare global {
  interface Uni {
    $u: $u;
  }
}
