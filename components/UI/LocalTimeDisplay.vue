<template>
  <span class="ms-3 date"> {{ localTime }}</span>
</template>

<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  inputTime: {
    type: String,
    required: true,
  },
});

const { inputTime } = toRefs(props);

const localTime = computed(() => {
  if (inputTime.value) {
    const date = new Date(inputTime.value);
    return date.toLocaleString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
  return "";
});
</script>
