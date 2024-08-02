<script setup lang="ts">
import {
  TableColumnData,
  TableData,
  TableExpandable,
} from "@arco-design/web-vue";
import { h, reactive } from "vue";
import ExpandedContent from "./ExpandedContent.vue";

export interface ResultListData extends TableData {
  id: string;
  appName: string;
  packageName: string;
  activityName: string;
}

const columns = [
  {
    title: "App",
    dataIndex: "appName",
  },
  {
    title: "包名",
    dataIndex: "packageName",
  },
  {
    title: "活动",
    dataIndex: "activityName",
  },
  {
    title: "操作",
    fixed: "right",
  },
] satisfies TableColumnData[];

const expandable = reactive<TableExpandable>({
  expandedRowRender: (record) => {
    const { id, packageName } = record as ResultListData;

    return h(ExpandedContent, {
      id,
      packageName,
    });
  },
});

defineProps<{
  data: ResultListData[] | undefined;
  loading: boolean;
}>();
</script>

<template>
  <a-table
    :columns="columns"
    :data="data"
    :loading="loading"
    :expandable="expandable"
    :row-selection="{
      type: 'checkbox',
      showCheckedAll: true,
      onlyCurrent: false,
    }"
  />
</template>
