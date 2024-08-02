<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
  <a-config-provider>
    <BaseLayout>
      <router-view />
    </BaseLayout>
  </a-config-provider>
</template>
