<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-md-3">
        <!-- 左側欄位 -->
        <div class="sticky-top">
          <h4>功能連結</h4>
          <div class="nav flex-column">
            <a class="nav-link active" aria-current="page" href="#">首頁</a>
            <a class="nav-link" href="#">設定</a>
            <a class="nav-link" href="#">訊息</a>
            <a class="nav-link" href="#">通知</a>
          </div>
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
          <h4>我的社團</h4>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">社團名稱</h5>
              <p class="card-text">社團簡介</p>
            </div>
          </div>
          <!-- 其他卡片 -->
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

function post() {
  console.log("按送出");
}
</script>

<style>
.sticky-top {
  top: 20px;
  position: sticky;
}
</style>
