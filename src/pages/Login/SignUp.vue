<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
});

function submit() {
  console.log(form);
}
</script>

<template>
  <a-card title="注册新账户">
    <a-form :model="form" @submit="submit">
      <a-form-item
        field="email"
        label="邮箱"
        :rules="[
          {
            required: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          },
        ]"
      >
        <a-input v-model="form.email" />
      </a-form-item>
      <a-form-item
        field="name"
        label="用户名"
        :rules="[
          {
            required: true,
          },
        ]"
      >
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item
        field="password"
        label="密码"
        :rules="[
          {
            required: true,
            minLength: 8,
            maxLength: 16,
          },
        ]"
      >
        <a-input-password v-model="form.password" />
      </a-form-item>
      <a-form-item
        field="confirmPassword"
        label="确认密码"
        :rules="[
          {
            required: true,
            minLength: 8,
            maxLength: 16,
          },
        ]"
      >
        <a-input-password v-model="form.confirmPassword" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
