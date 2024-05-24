<template>
  <div class="p-2">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h6 class="text-center">
        <b>{{ name }}</b>
      </h6>
      <!-- 全部好友點開應該出現一個 modal (TODO) -->
      <a>全部{{ name }}</a>
    </div>
    <div class="">
      <ListItem
        v-for="item in props.items"
        :key="item.id"
        :avatarUrl="item.avatarUrl"
        :name="item.name"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>
