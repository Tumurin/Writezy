<template>
  <div class="position-relative">
    <button class="btn" @click="toggleMenu">
      <Icon name="material-symbols:bookmark-outline-rounded" class="fs-3"/>
    </button>
    <!-- 用戶收藏選單 -->
    <div
      v-if="menuVisible"
      class="dropdown-menu show position-absolute end-0 bottom-100 mb-2"
    >
      <ul class="list-unstyled mb-0">
        <li
          v-for="(item, index) in collections"
          :key="index"
          class="dropdown-item"
          @click="addToCollection(item._id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  articleId: {
    type: String,
    required: true,
  },
});

const menuVisible = ref(false);
const collections = ref([]);

// 切換選單的顯示狀態
const toggleMenu = async () => {
  console.log("顯示選單");
  menuVisible.value = !menuVisible.value;
  console.log(menuVisible.value);
  getUserCollections();
};

async function getUserCollections() {
  try {
    const result = await useFetchWithToken("/api/collection", {
      method: "GET",
    });
    if (result.code === 200) collections.value = result.collections;
    else {
      console.error("未知的錯誤");
    }
  } catch (e) {
    console.log(e);
  }
}

async function addToCollection(collectionId) {
  console.log("加到收藏", props.articleId, collectionId);
  try {
    const result = await useFetchWithToken(
      `/api/collection/${collectionId}/${props.articleId}`,
      {
        method: "POST",
      }
    );
    console.log(result);
    if (result.code === 200) collections.value = result.collections;
    else {
      console.error("未知的錯誤", result.code);
    }
  } catch (e) {
    console.log(e);
  }
  menuVisible.value = !menuVisible.value;
}
</script>
