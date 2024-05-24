<template>
  <!-- 資料夾元件 -->
  <div class="p-2">
    <!-- 資料夾標題，點擊時切換展開/折疊狀態 -->
    <div class="d-flex justify-content-between">
      <div class="folder-header" @click="toggleFolder">
        <!-- 展開/折疊指示符 -->
        <Icon
          :name="
            isOpen ? 'ic:outline-keyboard-arrow-down' : 'ic:outline-keyboard-arrow-right'
          "
        />
        <!-- 資料夾名稱 -->
        <span>{{ folderName }}</span>
      </div>
      <!-- 編輯資料夾圖標 -->
      <Icon name="tabler:pencil" />
    </div>
    <!-- 資料夾內容，僅在展開時顯示 -->
    <div v-if="isOpen" class="ms-2">
      <ul class="list-unstyled mt-2">
        <!-- 遍歷資料夾項目 -->
        <li v-for="item in items" :key="item.id">
          <!-- 若項目是資料夾，則遞歸顯示Folder元件 -->
          <Folder
            v-if="item.type === 'folder'"
            :folderName="item.name"
            :items="item.children"
          />
          <!-- 若項目是標籤，直接顯示標籤名稱 -->
          <TagOrange v-else class="my-1">#{{ item.name }}</TagOrange>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 定義元件接收的屬性
const props = defineProps({
  folderName: {
    type: String,
    required: true, // 資料夾名稱為必填
  },
  items: {
    type: Array,
    required: true, // 資料夾項目列表為必填
  },
});

// 資料夾展開狀態，預設為展開
const isOpen = ref(true);

// 切換資料夾展開/折疊狀態的方法
const toggleFolder = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* 資料夾標題樣式 */
.folder-header {
  cursor: pointer;
}
</style>
