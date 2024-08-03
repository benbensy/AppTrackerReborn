<script setup lang="ts">
import ResultTable from "@/components/ResultTable/ResultTable.vue";
import SearchBox, { SearchType } from "@/components/SearchBox.vue";
import { useGetAppInfo } from "@/data/appInfo";
import { computed, ref, watch } from "vue";
import { useRouteQuery } from "@vueuse/router";
import { useRouter } from "vue-router";

const type = useRouteQuery<SearchType>("type", "keyword");
const page = useRouteQuery("page", 1, { transform: Number });
const wd = useRouteQuery<string>("wd", "");

const internalType = ref(type.value);
const internalWd = ref(wd.value);

const { data, loading, run: getAppInfo, mutate } = useGetAppInfo();

watch(
  [type, page, wd],
  ([oldType, _, oldWd]) => {
    if (oldType !== type.value || oldWd !== wd.value) {
      page.value = 1;
    }

    const payload = {
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
  if (internalWd.value) {
    router.replace({
      query: {
        type: type.value,
        wd: wd.value,
        page: page.value,
      },
    });
    wd.value = internalWd.value;
    type.value = internalType.value;
  } else {
    clear();
  }
}

function clear() {
  router.replace({ query: {} });
  mutate(undefined);
}

const resultListData = computed(() =>
  data.value?.items.map(
    ({ id, appName, activityName, packageName, count }) => ({
      key: id,
      id,
      appName,
      activityName,
      packageName,
      count,
    })
  )
);

const total = computed(() => data.value?.metadata.total);
</script>

<template>
  <a-space direction="vertical" align="center" :size="14">
    <div class="md:text-4xl text-2xl font-bold">
      App Tracker For
      <span class="underline underline-wavy decoration-yellow-300"
        >Icon Pack</span
      >
      <template v-if="internalType === 'regex'">*</template>
    </div>
    <SearchBox
      v-model:keyword="internalWd"
      v-model:search-type="internalType"
      :loading="loading"
      @search="search"
      @clear="clear"
    />
    <ResultTable
      v-if="data !== undefined"
      :loading="loading"
      :data="loading ? undefined : resultListData"
      v-model:page="page"
      :total="total ?? 0"
    />
  </a-space>
</template>
