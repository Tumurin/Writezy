<template>
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      :class="['nav-link', { active: selectedTab === index + 1 }]"
      :id="`${tab.id}-tab`"
      data-bs-toggle="pill"
      :data-bs-target="`#v-pills-${tab.id}`"
      type="button"
      role="tab"
      :aria-controls="`v-pills-${tab.id}`"
      :aria-selected="selectedTab === index + 1"
      @click="() => updateTab(index + 1)"
    >
      <Icon :name="tab.icon" class="fs-4 me-2" />
      <slot :name="tab.slot"></slot>
    </button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  selectedTab: Number
})

const emit = defineEmits(['update-tab'])

const tabs = [
  { id: 'all', slot: 'tab-1', icon: 'material-symbols:layers-outline' },
  { id: 'post', slot: 'tab-2', icon: 'ic:outline-insert-drive-file' },
  { id: 'club', slot: 'tab-3', icon: 'akar-icons:people-group' },
  { id: 'people', slot: 'tab-4', icon: 'material-symbols:person-outline-rounded' }
]

function updateTab(tab) {
  emit('update-tab', tab)
}
</script>

<style lang="scss" scoped>
.nav-link.active {
  background-color: #4d2082;
}

.nav-link {
  color: #0c0c0e;
}
</style>