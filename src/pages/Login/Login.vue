<script setup lang="ts">
import { loginUser } from "@/data/users";
import { Message } from "@arco-design/web-vue";
import { useLocalStorage } from "@vueuse/core";
import { AxiosError } from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const authToken = useLocalStorage("auth", "");
const router = useRouter();

const form = reactive({
  username: "",
  password: "",
});

async function submit() {
  try {
    const data = await loginUser(form);
    authToken.value = data.value;
    Message.success({ content: "登录成功" });
    router.replace({ name: "home" });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        Message.error({ content: "登录失败，请检查输入" });
      }
    }
  }
}
</script>

<template>
  <a-card title="登录">
    <Link :to="{ name: 'sign-up' }">注册</Link>
    <a-form :model="form" @submit="submit">
      <a-form-item
        field="username"
        label="邮箱"
        :rules="[
          {
            required: true,
            message: '请填写邮箱',
          },
        ]"
      >
        <a-input v-model="form.username" placeholder="邮箱" />
      </a-form-item>
      <a-form-item
        field="password"
        label="密码"
        :rules="[
          {
            required: true,
            minLength: 8,
            maxLength: 16,
            message: '请填写密码',
          },
        ]"
      >
        <a-input-password v-model="form.password" placeholder="密码" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
