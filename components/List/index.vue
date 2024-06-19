<template>
  <div class="p-2">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h6 class="text-center">
        <b>{{ name }}</b>
      </h6>
      <!-- 全部好友點開應該出現一個 modal (TODO) -->
      <ModalFriends :modalName="name"></ModalFriends>
    </div>
    <div class="">
      <ListItem
        v-for="item in props.items"
        :key="item.id"
        :avatarUrl="item.avatarUrl"
        :name="item.name"
        :is-manager="item.isManager"
        :is-friend="item.isFriend"
        :club-id="item.clubId"
        :friend-id="item.friendId"
        @delete-club="deleteClub"
        @delete-friend="deleteFriend"
        @confirm-friend="confirmFriend"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  }
});
const emit = defineEmits(['refreshUser'])
const user = useAuthUser()
const refreshInfo = ()=>{
  emit('refreshUser')
}
// 刪除社團
const deleteClub = async(id)=>{
  await findOneClubAndDelete(id)
  try{
    const deleteOneClub = await $fetch(`/api/club/remove/${id}`,{method:'DELETE'})
    console.log(deleteOneClub)
    alert("成功刪除社團")
    refreshInfo()
  }catch(err){
    console.log(err.message)
    alert("系統出現問題")
  }
}
// 刪除使用者中的社團
const findOneClubAndDelete = async (id)=>{
  try{
    const result = await $fetch(`/api/club/${id}`,{method:'GET'})
    console.log(result.data.members)
    const tempClubUsers = ref(null)
    tempClubUsers.value = result.data.members
    tempClubUsers.value.forEach(async(item)=>{
      const result = await $fetch(`/api/club/deleteMembersClub/${item.id}`,{
        method:'PATCH',
        body:{
          id:id
        }
      })
      console.log(result)
    })
  }catch(err){
    console.log(err)
  }
}
// 確認好友
const confirmFriend = async(oppoentId)=>{
  const id = user.value._id
  try{
    const confirmNewFriend = await $fetch(`/api/friend/confirmFriend/${id}`,{
      method:'PATCH',
      body:{
        id:oppoentId,
        myName:user.value.name
      }
    })
    console.log(confirmNewFriend)
    refreshInfo()
  }catch(error){
    console.log(error)
  }
}
// 刪除好友
const deleteFriend = async(oppoentId)=>{
  const id = user.value._id
  try{
    const deleteMyFriend = await $fetch(`/api/friend/deleteFriend/${id}`,{
      method:'PATCH',
      body:{
        id:oppoentId,
        myName:user.value.name
      }
    })
    console.log(deleteMyFriend)
    refreshInfo()
  }catch(error){
    console.log(error)
  }
}
</script>
