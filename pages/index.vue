<template>
  <div class="horizontal-line-black"></div>
  <div class="container-lg container-fluid">
    <div class="row">
      <!-- 左側欄位 -->
      <div class="col-lg-3 bg-primary-02">
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

      <!-- 中間瀑布流式貼文 -->
      <div class="col-lg-6 border">
        <div class="middle-wrapper d-flex">
          <UIAvatar class="me-3" userId="abcd1234"></UIAvatar>
          <input type="text" class="form-control" placeholder="發布心情..." />
        </div>
        <div class="horizontal-line-grey my-3"></div>

        <PostsPostFrame></PostsPostFrame>
        <div class="horizontal-line-grey my-3"></div>

      </div>

      <!-- 右側資訊卡 -->
      <div class="col-lg-3 bg-grey-05">
        <div>
          <h4>我的社團</h4>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">社團名稱</h5>
              <p class="card-text">社團簡介</p>
            </div>
          </div>
          <!-- 其他卡片 -->
        </div>
        <MessageChat class="d-none d-lg-block"></MessageChat>
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
  top: 20px;
  position: sticky;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
}
</style>
