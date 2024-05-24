<template>
  <div class="container-lg container-fluid">
    <div class="row mt-3">
      <div class="col-md-3">
        <!-- 左側欄位 -->
        <div class="sticky-top">
          <Folder
            folderName="我的標籤"
            :items="[
              { id: 1, name: '標籤1', type: 'file' },
              { id: 2, name: '標籤2', type: 'file' },
              {
                id: 3,
                name: '子資料夾',
                type: 'folder',
                children: [
                  { id: 4, name: '子資料夾項目1', type: 'file' },
                  { id: 5, name: '子資料夾項目2', type: 'file' },
                ],
              },
            ]"
          ></Folder>
          <hr />
          <Folder
            folderName="我的收藏"
            :items="[
              { id: 1, name: '收藏項目1', type: 'file' },
              { id: 2, name: '收藏項目2', type: 'file' },
            ]"
          ></Folder>
        </div>
      </div>
      <div class="col-md-6">
        <!-- 中間瀑布流式貼文 -->
        <input type="text" class="form-control mb-3" placeholder="發布心情..." />
        <button type=" button" class="btn btn-primary" @click="post">送出</button>
        <div v-for="post in posts" :key="post.id" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.content }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <!-- 右側資訊卡 -->
        <div class="sticky-top">
          <List name="好友" :items="friends" />
          <hr />
          <List name="社團" :items="clubs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

function post() {
  console.log("按送出");
}
</script>

<style>
.sticky-top {
  /* 以 nav 高度下去貼齊 */
  top: 67px;
  position: sticky;
}
</style>
