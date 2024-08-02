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

const searchType = ref<SearchType>("keyword");
const keyword = ref("");

defineEmits<{
  (e: "search", value: { searchType: SearchType; keyword: string }): void;
  (e: "clear"): void;
}>();
</script>

<template>
  <a-space size="small">
    <a-input-group>
      <a-select v-model="searchType" class="w-30">
        <template v-for="{ label, value } in searchTypeOptions">
          <a-option :label="label" :value="value"></a-option>
        </template>
      </a-select>
      <a-input-search
        v-model="keyword"
        @search="$emit('search', { searchType, keyword })"
        search-button
        allow-clear
        @clear="$emit('clear')"
      />
    </a-input-group>
  </a-space>
</template>
