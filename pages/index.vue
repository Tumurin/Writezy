<template>
  <div class="horizontal-line-black"></div>
  <div class="container-lg container-fluid">
    <div class="row">
      <!-- 左側欄位 -->
      <div class="col-lg-3">
        <div class="d-none d-lg-block sticky-top">
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
          <Folder
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

      <!-- 中間瀑布流式貼文 -->
      <div class="col-12 col-lg-6 border">
        <div class="middle-wrapper d-flex">
          <UIAvatar class="me-3" userId="abcd1234"></UIAvatar>
          <input type="text" class="form-control" placeholder="發布心情..." />
        </div>
        <div class="horizontal-line-grey my-3"></div>

        <PostsPostFrame></PostsPostFrame>
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
import { useAuth } from '#imports';

const myAuth = useAuth()
definePageMeta({
  middleware: "auth",
});
const getUser = async () => {
  try {
    const data = await useFetchWithToken(`/api/auth/user`, {
      method: "GET",
    });
    console.log(data.user);
  } catch (err) {
    console.log(error);
  }
};
onMounted(() => {
  myAuth.getUser()
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
