<template>
  <div class="horizontal-line-black"></div>
  <div class="container-lg container-fluid">
    <div class="row">
      <!-- 左側欄位 -->
      <div class="col-lg-3">
        <div class="d-none d-lg-block sticky-top">
          <Folder folderName="我的標籤" :items="myTags"></Folder>
          <!-- <Folder
            folderName="程式開發"
            :items="[
              { id: 1, name: '標籤1', type: 'file' },
              { id: 2, name: '標籤2', type: 'file' },
              {
                id: 3,
                name: '前端',
                type: 'folder',
                children: [
                  { id: 4, name: '子資料夾項目1', type: 'file' },
                  { id: 5, name: '子資料夾項目2', type: 'file' },
                ],
              },
            ]"
          ></Folder> -->
          <hr />
          <!-- 用戶收藏清單 -->
          <Collection></Collection>
        </div>
      </div>

      <!-- 中間瀑布流式貼文 -->
      <div class="col-12 col-lg-6 border">
        <div class="middle-wrapper d-flex align-items-start">
          <UIAvatar class="me-3" userId="abcd1234"></UIAvatar>
          <UISampleArticleEditor class="w-100" @submit="postArticle" />
        </div>
        <div class="horizontal-line-grey"></div>

        <PostFrame
          v-for="(article, index) in articles"
          :article="article"
          :articleId="article._id"
          :author="article.author"
          :content="article.content"
          :key="index"
          @edited="refresh"
        >
          {{ article.content }}</PostFrame
        >
        <div class="horizontal-line-grey my-3"></div>
      </div>

      <!-- 右側資訊卡 -->
      <div class="col-lg-3">
        <div class="d-none d-lg-block">
          <List name="好友" :items="friends" />
          <hr />
          <List name="社團" :items="clubs" />
        </div>
        <MessageChat class="d-none d-lg-block"></MessageChat>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "#imports";

const myAuth = useAuth();
definePageMeta({
  middleware: "auth",
});

onBeforeMount(() => {
  refresh();
  getUserTagCollections();
});

/** 貼文牆上所有的文章 */
const articles = ref([]);
/** 我的標籤上的未分類標籤 */
const tags = ref([]);
/** 我的標籤上的標籤集合 */
const tagCollections = ref([]);

async function postArticle(content) {
  console.log("送出貼文", content);
  const result = await useFetchWithToken("/api/article", {
    method: "POST",
    body: {
      content: content,
    },
  });
  if (result.code === 200) {
    refresh();
  }
}

// 刷新
async function refresh() {
  const result = await useFetchWithToken("/api/article", {
    method: "GET",
  });
  console.log("刷新", result);
  articles.value = result.articles;
}

// 讀取用戶收藏清單
async function getUserTagCollections() {
  const result = await useFetchWithToken("/api/tagCollection", {
    method: "GET",
  });
  console.log("用戶收藏清單", result.defaultCollection.tags);
  tags.value = result.defaultCollection.tags;
  tagCollections.value = result.tagCollections;
}

const myTags = computed(() => {
  console.log("調用計算", tags.value);
  if (!tags.value || tags.value.length == 0) return [];
  return tags.value.map((tag, index) => {
    return {
      id: index,
      name: tag,
      type: "file",
    };
  });
});

const posts = [
  { id: 1, title: "Post Title 1", content: "Post content 1" },
  { id: 2, title: "Post Title 2", content: "Post content 2" },
  { id: 2, title: "Post Title 2", content: "Post content 2" },
  { id: 2, title: "Post Title 2", content: "Post content 2" },
  { id: 2, title: "Post Title 2", content: "Post content 2" },
  { id: 2, title: "Post Title 2", content: "Post content 2" },
  { id: 2, title: "Post Title 2", content: "Post content 2" },
  { id: 2, title: "Post Title 2", content: "Post content 2" },
  { id: 2, title: "Post Title 2", content: "Post content 2" },
];
// 好友列表數據
const friends = [
  { id: 1, avatarUrl: "https://placehold.co/32", name: "好友1" },
  { id: 2, avatarUrl: "https://placehold.co/32", name: "好友2" },
];

// 社團列表數據
const clubs = [
  { id: 1, avatarUrl: "https://placehold.co/32", name: "社團1" },
  { id: 2, avatarUrl: "https://placehold.co/32", name: "社團2" },
];
</script>

<style lang="scss" scoped>
.horizontal-line-black {
  width: 100%;
  height: 1px;
  border-top: solid 1px #0c0c0e;
}

.horizontal-line-grey {
  width: 100%;
  height: 1px;
  border-top: solid 1px #d7d7dc;
}

.middle-wrapper {
  padding: 1.5rem 0.75rem;
}

.multiline-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
}

.like-margin {
  margin-bottom: 0.75rem;
}

.sticky-top {
  /* 以 nav 高度下去貼齊 */
  top: 67px;
  position: sticky;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
}
</style>
