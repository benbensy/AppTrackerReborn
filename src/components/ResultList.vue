<script setup lang="ts">
import { TableData, TableExpandable } from "@arco-design/web-vue";
import { reactive } from "vue";

type ColumnOptions = { title: string; dataIndex: string };

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
] satisfies ColumnOptions[];

const expandable = reactive<TableExpandable>({
  expandedRowRender(record) {
    const { id } = record as ResultListData;
    
    return id;
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
