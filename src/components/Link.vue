<script setup lang="ts">
import {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
  useLink,
} from "vue-router";
const { to } = defineProps<{
  to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
}>();

const { navigate, href, isActive, isExactActive } = useLink({ to });
</script>

<template>
  <a-link
    v-bind="$attrs"
    :href="href"
    @click="navigate"
    :class="{
      active: isActive || isExactActive,
    }"
  >
    <slot />
  </a-link>
</template>

<style scoped>
.active {
  text-decoration: underline dashed;
}
</style>
