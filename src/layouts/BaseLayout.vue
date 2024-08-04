<script setup lang="ts">
import Logo from "@/assets/logo.png";
import { Message } from "@arco-design/web-vue";
import { useLocalStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
const router = useRouter();
const authToken = useLocalStorage("auth", "");

function logout() {
  authToken.value = "";
  Message.info({ content: "已退出登录状态" });
}
</script>

<template>
  <a-layout>
    <a-layout-header class="p-2 mb-2 flex items-center justify-between shadow">
      <a-space size="medium">
        <a-image
          :src="Logo"
          :preview-visible="false"
          :height="28"
          class="cursor-pointer"
          @click="router.push({ name: 'home' })"
        />
        <Link :to="{ name: 'home' }">首页</Link>
        <Link :to="{ name: 'workbench' }">工作台</Link>
      </a-space>
      <a-space>
        <template v-if="authToken">
          <a-button type="primary" size="small" @click="logout">退出</a-button>
        </template>
        <template v-else>
          <a-button
            type="primary"
            size="small"
            @click="router.push({ name: 'login' })"
            >登录</a-button
          >
        </template>
      </a-space>
    </a-layout-header>
    <a-layout-content class="px-2 m-auto max-w-full box-border">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="flex justify-center">
      <div class="mt-2">&copy; {{ new Date().getFullYear() }} Indusy</div>
    </a-layout-footer>
  </a-layout>
</template>
