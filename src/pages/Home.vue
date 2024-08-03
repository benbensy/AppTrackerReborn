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
      name: "search",
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
    <div class="md:text-4xl text-2xl font-bold">
      App Tracker For
      <span class="underline underline-wavy decoration-yellow-300"
        >Icon Pack</span
      >
      <template v-if="type === 'regex'">*</template>
    </div>
    <SearchBox
      v-model:keyword="wd"
      v-model:search-type="type"
      @search="search"
      :loading="false"
    />
  </a-space>
</template>
