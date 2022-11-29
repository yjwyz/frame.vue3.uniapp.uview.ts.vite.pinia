/*
 * @Author: mfxhb
 * @Date: 2022-11-29 16:23:03
 * @LastEditTime: 2022-11-29 16:28:06
 * @Description:
 */
import { defineStore } from "pinia";

const useLogin = defineStore("login", {
  state() {
    return {
      teststr: "sadfasdf",
    };
  },
  actions: {
    setStr(newStr: string) {
      this.teststr = newStr;
    },
  },
});

export { useLogin };
