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
            message: '请填写邮箱'
          },
        ]"
      >
        <a-input v-model="form.email" placeholder="邮箱" />
      </a-form-item>
      <a-form-item
        field="name"
        label="用户名"
        :rules="[
          {
            required: true,
            message: '请填写用户名',
          },
        ]"
      >
        <a-input v-model="form.name" placeholder="用户名" />
      </a-form-item>
      <a-form-item
        field="password"
        label="密码"
        :rules="[
          {
            required: true,
            minLength: 8,
            maxLength: 16,
            message: '请填写密码'
          },
        ]"
      >
        <a-input-password v-model="form.password" placeholder="密码" />
      </a-form-item>
      <a-form-item
        field="confirmPassword"
        label="确认密码"
        :rules="[
          {
            required: true,
            minLength: 8,
            maxLength: 16,
            message: '请填写确认密码',
            validator(value, callback) {
              if (value !== form.password) {
                callback('两次输入密码不一致');
              } else {
                callback();
              }
            },
          },
        ]"
      >
        <a-input-password v-model="form.confirmPassword" placeholder="确认密码" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
