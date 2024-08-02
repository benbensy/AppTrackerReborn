<script setup lang="ts">
import ResultTable from "@/components/ResultTable/ResultTable.vue";
import SearchBox, { SearchType } from "@/components/SearchBox.vue";
import { useGetAppInfo } from "@/data/appInfo";
import { computed, watch } from "vue";
import { useRouteQuery } from "@vueuse/router";
import { useRouter } from "vue-router";

const type = useRouteQuery<SearchType>("type", "keyword");
const per = useRouteQuery("per", 20, { transform: Number });
const page = useRouteQuery("page", 1, { transform: Number });
const wd = useRouteQuery<string>("wd", "");

const { data, loading, run: getAppInfo, mutate } = useGetAppInfo();

watch(
  [type, per, page, wd],
  () => {
    const payload = {
      per: per.value,
      page: page.value,
    };

    if (type.value === "regex") {
      Object.assign(payload, {
        regex: wd.value,
      });
    } else {
      Object.assign(payload, {
        q: wd.value,
      });
    }

    if (wd.value) {
      getAppInfo(payload);
    }
  },
  { immediate: true }
);

const router = useRouter();
function search() {
  router.replace(
    wd.value
      ? {
          query: {
            type: type.value,
            wd: wd.value,
            per: per.value,
            page: page.value,
          },
        }
      : { query: {} }
  );
}

function clear() {
  router.replace({ query: {} });
  mutate(undefined);
}

const resultListData = computed(() =>
  data.value?.items.map(({ id, appName, activityName, packageName }) => ({
    key: id,
    id,
    appName,
    activityName,
    packageName,
  }))
);
</script>

<template>
  <a-space direction="vertical" align="center">
    <a-typography>
      <a-typography-title>App Tracker</a-typography-title>
    </a-typography>
    <SearchBox
      v-model:keyword="wd"
      v-model:search-type="type"
      @search="search"
      @clear="clear"
    />
    <ResultTable
      v-if="data !== undefined"
      :loading="loading"
      :data="loading ? undefined : resultListData"
    />
  </a-space>
</template>
