<script setup lang="ts">
import { Notification } from "@arco-design/web-vue";
import { ResultListData } from "./ResultTable.vue";
import { computed } from "vue";

const { record } = defineProps<{
  record: ResultListData;
}>();

async function copy(content: string) {
  await navigator.clipboard.writeText(content);
  Notification.success({
    content: "复制成功",
    position: "bottomLeft",
  });
}

const appFilter = computed(
  () =>
    `<item component="ComponentInfo{${record.packageName}/${record.activityName}}" drawable="${record.appName}" />`
);
</script>

<template>
  <a-space size="medium">
    <a-tooltip content="复制 Appfilter">
      <icon-copy @click="copy(appFilter)" />
    </a-tooltip>
    <icon-copy />
    <icon-copy />
  </a-space>
</template>
