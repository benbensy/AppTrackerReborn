<script setup lang="ts">
import { useGetAppIconLocal } from "@/data/icon";

const { packageName } = defineProps<{
  id: string;
  packageName: string;
}>();

const { data, run: getAppIconLocal } = useGetAppIconLocal();

getAppIconLocal({
  packageName,
});
</script>

<template>
  <a-row>
    <a-col :span="6">
      <a-image :src="data" :height="50" />
    </a-col>
  </a-row>
</template>
