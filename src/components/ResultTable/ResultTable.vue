<script setup lang="ts">
import {
  TableColumnData,
  TableData,
  TableExpandable,
} from "@arco-design/web-vue";
import { h, reactive } from "vue";
import ExpandedContent from "./ExpandedContent.vue";
import ResultOperation from "./ResultOperation.vue";

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
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
  },
  {
    title: "包名",
    dataIndex: "packageName",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
  },
  {
    title: "活动",
    dataIndex: "activityName",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
  },
  {
    title: "操作",
    fixed: "right",
    width: 120,
    render: ({ record }) => {
      return h(ResultOperation, { record: record as ResultListData });
    },
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

defineModel<number>('page')

defineProps<{
  data: ResultListData[] | undefined;
  loading: boolean;
  total: number;
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
    table-layout-fixed
    :pagination="{
      total,
      pageSize: 20,
    }"
    :scroll="{'maxHeight': '70vh'}"
    @page-change="$emit('update:page', $event)"
  />
</template>