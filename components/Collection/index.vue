<template>
  <!-- 我的收藏 -->
  <Folder
    folderName="我的收藏"
    :items="collections"
    navTo="collection"
    @switchEditMode="onEditModeSwitched"
    @deleteItem="onDeleteItem"
  ></Folder>
  <!-- 新增我的收藏分類 -->
  <div class="d-flex" v-if="onEditMode">
    <input class="form-control me-2" type="text" v-model="collectionName" />
    <button class="btn btn-primary" type="button" @click="newCollection">新增</button>
  </div>
</template>

<script setup>
const collectionName = ref("");
const onEditMode = ref(false);
const collections = ref([]);

onBeforeMount(() => {
  console.log("讀取用戶分類");
  refresh();
});

// 新增一個收藏分類
async function newCollection() {
  console.log("新增分類", collectionName);
  const result = await useFetchWithToken("/api/collection", {
    method: "POST",
    body: {
      name: collectionName.value,
    },
  });
  if (result.code === 200) {
    collectionName.value = "";
    refresh();
  } else {
    console.error("未知的錯誤");
  }
}

// 切換編輯狀態
function onEditModeSwitched() {
  console.log("切換編輯狀態");
  onEditMode.value = !onEditMode.value;
}

// 刪除一個收藏分類
async function onDeleteItem(id) {
  console.log("刪除分類", id);
  try {
    const result = await useFetchWithToken(`/api/collection/${id}`, {
      method: "DELETE",
    });
    if (result.code === 200) {
      refresh();
    } else {
      console.error("未知的錯誤", result.code);
    }
  } catch (e) {
    console.log(e);
  }
}

// 刷新
async function refresh() {
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
</script>
