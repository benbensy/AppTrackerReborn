<script setup lang="ts">
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

defineModel<string>("keyword");
defineModel<SearchType>("searchType");

defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  (e: "search"): void;
  (e: "clear"): void;
}>();
</script>

<template>
  <a-space>
    <a-input-group>
      <a-select :model-value="searchType" @update:model-value="$emit('update:searchType', $event as SearchType)" class="w-30" size="large">
        <template v-for="{ label, value } in searchTypeOptions">
          <a-option :label="label" :value="value"></a-option>
        </template>
      </a-select>
      <a-input-search
        :model-value="keyword"
        @update:model-value="$emit('update:keyword', $event)"
        @search="$emit('search')"
        search-button
        allow-clear
        @clear="$emit('clear')"
        @keyup.enter="$emit('search')"
        size="large"
        :loading="loading"
        placeholder="想搜点儿什么？"
      />
    </a-input-group>
  </a-space>
</template>
