<template>
  <div class="tab-content" id="v-pills-tabContent">
    <div
      v-for="(content, index) in contents"
      :key="index"
      :class="['tab-pane', 'fade', { show: selectedTab === index + 1, active: selectedTab === index + 1 }]"
      :id="`v-pills-${content.id}`"
      role="tabpanel"
      :aria-labelledby="`${content.id}-tab`"
    >
      <slot :name="content.slot"></slot>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  selectedTab: Number
})

const contents = [
  { id: 'all', slot: 'content-1' },
  { id: 'post', slot: 'content-2' },
  { id: 'club', slot: 'content-3' },
  { id: 'people', slot: 'content-4' }
]
</script>
<style lang="scss" scoped>
.tab-pane {
  display: none;
}
.tab-pane.show.active {
  display: block;
}
</style>
