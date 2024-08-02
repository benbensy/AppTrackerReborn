<script setup lang="ts">
import ResultList from "@/components/ResultList.vue";
import SearchBox, { SearchType } from "@/components/SearchBox.vue";
import { useGetAppInfo } from "@/data/appInfo";
import { computed, ref } from "vue";

const per = ref(20);
const page = ref(1);

const { data, loading, run: getAppInfo, mutate } = useGetAppInfo();

function search({
  searchType,
  keyword,
}: {
  searchType: SearchType;
  keyword: string;
}) {
  if (searchType === "keyword") {
    getAppInfo({ q: keyword, per: per.value, page: page.value });
  } else {
    getAppInfo({ regex: keyword });
  }
}

const resultListData = computed(() =>
  data.value?.items.map(({ id, appName, activityName, packageName }) => ({
    id,
    appName,
    activityName,
    packageName,
  }))
);
</script>

<template>
  <a-space direction="vertical">
    <SearchBox @search="search" @clear="mutate(undefined)" />
    <ResultList v-if="data !== undefined" :loading="loading" :data="loading ? undefined : resultListData" />
  </a-space>
</template>
