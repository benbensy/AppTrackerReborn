<script setup lang="ts">
import Logo from "@/assets/logo.png";
import { useRouter } from "vue-router";
const router = useRouter();
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
        <Link to="/">首页</Link>
      </a-space>
      <a-space>
        <a-button type="primary" size="small">登录</a-button>
      </a-space>
    </a-layout-header>
    <a-layout-content class="m-auto max-w-full md:max-w-screen-xl">
      <slot />
    </a-layout-content>
    <a-layout-footer class="flex justify-center">
      <div class="mt-2">&copy; {{ new Date().getFullYear() }} Indusy</div>
    </a-layout-footer>
  </a-layout>
</template>
