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
        <li>
          <a class="dropdown-item" href="#" v-if="isManager" @click.prevent="removeClub">刪除社團</a>
          <a class="dropdown-item" href="#" v-else-if="isFriend" @click.prevent="removeFriend">刪除好友</a>
          <a class="dropdown-item" href="#" v-else-if="!isFriend" @click.prevent="checkFriend">確認好友</a>
        </li>
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
  isManager:{
    type:Boolean
  },
  isFriend:{
    type:Boolean
  },
  clubId:{
    type:String
  },
  friendId:{
    type:String
  }
});
// 刪除社團以及刪除好友確認好友函式
const emit = defineEmits(['deleteClub','deleteFriend','confirmFriend'])
// 刪除社團
const removeClub = ()=>{
  emit('deleteClub',props.clubId)
}
// 刪除好友
const removeFriend = ()=>{
  emit('deleteFriend',props.friendId)
}
// 確認好友
const checkFriend = ()=>{
  emit('confirmFriend',props.friendId)
}


const placeholderUrl = "https://placehold.co/32"; // 網路上的佔位圖
</script>

<style scoped>
.avatar-img {
  width: 32px;
  height: 32px;
  object-fit: cover;
}
</style>
