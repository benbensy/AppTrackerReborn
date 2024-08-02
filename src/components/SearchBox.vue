<script setup lang="ts">
import { ref } from "vue";

export type SearchType = "keyword" | "regex";
type SearchTypeOption = { label: string; value: SearchType };
const searchTypeOptions = [
  {
    label: "关键词",
    value: "keyword",
  },
  {
    label: "正则",
    value: "regex",
  },
] as SearchTypeOption[];

const { keyword, searchType } = defineProps<{
  keyword: string;
  searchType: SearchType;
}>();

const preKeyword = ref(keyword);
const preSearchType = ref<SearchType>(searchType);

function search() {
  emit("update:keyword", preKeyword.value);
  emit("update:searchType", preSearchType.value);
  emit("search");
}

const emit = defineEmits<{
  (e: "search"): void;
  (e: "clear"): void;
  (e: "update:keyword", value: string): void;
  (e: "update:searchType", value: string): void;
}>();
</script>

<template>
  <a-space>
    <a-input-group>
      <a-select v-model="preSearchType" class="w-30" size="large">
        <template v-for="{ label, value } in searchTypeOptions">
          <a-option :label="label" :value="value"></a-option>
        </template>
      </a-select>
      <a-input-search
        v-model="preKeyword"
        @search="search()"
        search-button
        allow-clear
        @clear="$emit('clear')"
        @keyup.enter="search()"
        size="large"
      />
    </a-input-group>
  </a-space>
</template>
