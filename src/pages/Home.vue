<script setup lang="ts">
import { SearchType } from "@/components/SearchBox.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const type = ref<SearchType>("keyword");
const wd = ref("");
const page = ref(1);

const router = useRouter();
function search() {
  if (wd.value) {    
    router.replace({
      name: 'search',
      query: {
        type: type.value,
        wd: wd.value,
        page: page.value,
      },
    });
  }
}
</script>

<template>
  <a-space direction="vertical" align="center" :size="14">
    <div class="text-4xl font-bold ">App Tracker</div>
    <SearchBox
      v-model:keyword="wd"
      v-model:search-type="type"
      @search="search"
      :loading="false"
    />
  </a-space>
</template>
