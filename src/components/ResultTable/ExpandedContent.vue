<script setup lang="ts">
import { useGetAppIconLocal } from "@/data/icon";
import { ResultListData } from "./ResultTable.vue";

const { record } = defineProps<{
  record: ResultListData
}>();

const { data, run: getAppIconLocal } = useGetAppIconLocal();

getAppIconLocal({
  packageName: record.packageName,
});
</script>

<template>
  <a-row>
    <a-col :span="6">
      <a-image :src="data" :height="50" />
    </a-col>
  </a-row>
</template>
