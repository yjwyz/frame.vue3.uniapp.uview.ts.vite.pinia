<!--
 * @Author: mfxhb
 * @Date: 2022-11-29 09:58:01
 * @LastEditTime: 2022-11-29 16:30:44
 * @Description: 
-->
<template>
  <view>
    <u-button type="primary" @click="test" :color="$u.color.primary">
      测试
    </u-button>
    <u-button @click="setStore">修改</u-button>
  </view>
</template>

<script setup lang="ts">
import { useLogin } from "./login.pinia";
import { storeToRefs } from "pinia";
import { unref } from "vue";

const store = useLogin();
const { teststr } = storeToRefs(store);

const test = function () {
  console.log(uni.$u.test.object(12));
  console.log(unref(teststr));
};

const setStore = function () {
  const randomnum = uni.$u.random(1, 100) + "";
  store.setStr(randomnum);
};
</script>

<style lang="scss" scoped></style>
