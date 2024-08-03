<script setup lang="ts">
import {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
} from "vue-router";

defineProps<{
  to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
}>();
</script>

<template>
  <router-link
    :to="to"
    custom
    v-slot="{ navigate, href, isActive, isExactActive }"
  >
    <a
      :href="href"
      :class="[
        'arco-link',
        {
          'arco-link-active': isActive,
          'arco-link-exact-active': isExactActive,
        },
      ]"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>
</template>

<style scoped>
.arco-link-active,
.arco-link-exact-active {
  text-decoration: underline dashed;
}
</style>
