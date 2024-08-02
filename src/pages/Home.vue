<script setup lang="ts">
import { SearchType } from "@/components/SearchBox.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const type = ref<SearchType>("keyword");
const wd = ref("");
const per = ref(20);
const page = ref(1);

const router = useRouter();
function search() {
  router.replace(
    wd.value
      ? {
          name: "search",
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
    />
  </a-space>
</template>
