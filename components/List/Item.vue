<template>
  <div class="d-flex justify-content-between align-items-center p-1">
    <img
      :src="avatarUrl || placeholderUrl"
      alt="Avatar"
      class="avatar-img rounded-circle me-2"
    />
    <span class="flex-grow-1"
      ><b>{{ name }}</b></span
    >
    <div class="dropdown d-flex justify-content-between">
      <button
        class="btn pe-0"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Icon name="material-symbols:more-horiz" />
      </button>
      <!-- 功能選單：檢舉、刪除好友...(TODO) -->
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">功能1</a></li>
        <li><a class="dropdown-item" href="#">功能2</a></li>
        <li><a class="dropdown-item" href="#">功能3</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 接收好友頭像和名稱作為屬性
const props = defineProps({
  avatarUrl: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
});

const placeholderUrl = "https://placehold.co/32"; // 網路上的佔位圖
</script>

<style scoped>
.avatar-img {
  width: 32px;
  height: 32px;
  object-fit: cover;
}
</style>
