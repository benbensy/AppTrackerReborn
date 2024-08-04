<script setup lang="ts">
import {
  TableData,
  TableExpandable,
  TableSortable,
} from "@arco-design/web-vue";
import { h, reactive } from "vue";
import ExpandedContent from "./ExpandedContent.vue";
import ResultOperation from "./ResultOperation.vue";

export interface ResultListData extends TableData {
  id: string;
  appName: string;
  packageName: string;
  activityName: string;
  count: number;
}

const sortable = {
  sortDirections: ["ascend", "descend"],
} satisfies TableSortable;

const expandable = reactive<TableExpandable>({
  expandedRowRender: (record) => {
    return h(ExpandedContent, {
      record: record as ResultListData,
    });
  },
});

defineModel<number>("page");

defineProps<{
  data: ResultListData[] | undefined;
  loading: boolean;
  total: number;
}>();
</script>

<template>
  <a-table
    :data="data"
    :loading="loading"
    :expandable="expandable"
    :row-selection="{
      type: 'checkbox',
      showCheckedAll: true,
      onlyCurrent: false,
    }"
    :pagination="{
      total,
      pageSize: 20,
    }"
    :scroll="{ maxHeight: '70vh', x: 1280 }"
    table-layout-fixed
    @page-change="$emit('update:page', $event)"
    size="small"
    class="w-full"
  >
    <template #columns>
      <a-table-column title="App" data-index="appName" :sortable="sortable">
        <template #cell="{ record }">
          {{ record.appName }}
        </template>
      </a-table-column>
      <a-table-column
        title="包名"
        data-index="packageName"
        :sortable="sortable"
      >
        <template #cell="{ record }">
          {{ record.packageName }}
        </template>
      </a-table-column>
      <a-table-column
        title="活动"
        data-index="activityName"
        :sortable="sortable"
      >
        <template #cell="{ record }">
          {{ record.activityName }}
        </template>
      </a-table-column>
      <a-table-column
        title="提交数"
        data-index="count"
        :sortable="sortable"
        :width="120"
      >
        <template #cell="{ record }">
          {{ record.count }}
        </template>
      </a-table-column>
      <a-table-column title="操作" fixed="right" :width="120">
        <template #cell="{ record }">
          <ResultOperation :record="record" />
        </template>
      </a-table-column>
    </template>
  </a-table>
</template>
