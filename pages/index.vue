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
          <!-- 用戶收藏清單 -->
          <Collection></Collection>
        </div>
      </div>

      <!-- 中間瀑布流式貼文 -->
      <div class="col-12 col-lg-6 border">
        <div class="middle-wrapper d-flex flex-column">
          <div class="d-flex mb-3">
            <UIAvatar class="me-3" userId="abcd1234"></UIAvatar>
            <input
              type="text"
              class="form-control"
              v-model="content"
              placeholder="發布心情..."
            />
          </div>
          <button type="button" class="btn btn-primary ms-auto" @click="postArticle">
            發送
          </button>
        </div>
        <div class="horizontal-line-grey"></div>

        <PostFrame
          v-for="(article, index) in articles"
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
          <List name="好友" :items="friends" @refresh-user="getUserInfo"/>
          <hr />
          <List name="社團" :items="clubs" @refresh-user="getUserInfo"/>
        </div>
        <MessageChat class="d-none d-lg-block"></MessageChat>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "#imports";

const myAuth = useAuth();
const userInfo = useAuthUser();
console.log(userInfo.value.name)
const owner = ref('')
definePageMeta({
  middleware: "auth",
});

onBeforeMount(() => {
  refresh();
});

/** 貼文牆上所有的文章 */
const articles = ref([]);

/** 用戶輸入框中的新文章 */
const content = ref("");

async function postArticle() {
  console.log("送出貼文", content.value);
  const result = await useFetchWithToken("/api/article", {
    method: "POST",
    body: {
      content: content.value,
    },
  });
  if (result.code === 200) {
    content.value = "";
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
const friends = ref([])
// const friends = [
//   { id: 1, avatarUrl: "https://placehold.co/32", name: "好友1" },
//   { id: 2, avatarUrl: "https://placehold.co/32", name: "好友2" },
// ];

// 社團列表數據
const clubs = ref([])
// const clubs = [
//   { id: 1, avatarUrl: "https://placehold.co/32", name: "社團1" },
//   { id: 2, avatarUrl: "https://placehold.co/32", name: "社團2" },
// ];
// 取得好友以及社團資訊
const getUserInfo  = async ()=>{
  try{
        const user = await $fetch('/api/friend/owner',{
            method: 'POST',
            body: {email:userInfo.value.email,name:userInfo.value.name}
        })
        friends.value=[]
        clubs.value=[]
        console.log(user.data[0])
        owner.value = {...user.data[0]}
        console.log(owner.value)
        owner.value.friends.forEach((item,index)=>{
          friends.value[index] = {friendId:item.id._id,avatarUrl: "https://placehold.co/32",name:item.name,isFriend:item.status}
        })
        owner.value.clubs.forEach((item,index)=>{
          let isManager
          item.id.members.forEach((item)=>{
            if(item.id===owner.value._id){
              isManager = item.isManager
            }
          })
          clubs.value[index] = {clubId:item.id._id,avatarUrl: "https://placehold.co/32",name:item.name,isManager:isManager}
        })
        console.log(clubs.value)
    }catch(error){
        console.log(error)
    }
}
onMounted(() => {
  getUserInfo()
})
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
