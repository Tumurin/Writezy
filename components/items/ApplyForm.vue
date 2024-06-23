<template>
  <div
    class="frame border border-1 d-flex justify-content-center align-items-center p-2"
  >
    <div
      class="content-frame"
    >
      <div class="avatar-name row align-items-center">
        <div class="col-md-3 d-flex align-items-center">
          <div class="avatar rounded-circle"></div>
          <div class="ms-3 row">
            <span class="name d-block">{{ waitMember.name }}</span>
          </div>
        </div>
        <div class="col-md-7 mt-3 mt-md-0">
          {{waitMember.introduction.content}}
        </div>
        <div class="col-md-2 d-flex justify-content-evenly mt-md-0 mt-3">
            <a href="#" class="text-black text-decoration-none" @click.prevent="denyMember">拒絕</a>
            <a href="#" class="text-black text-decoration-none" @click.prevent="agreeMember">同意</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['waitMember','clubId'])
const emits = defineEmits(['refreshMembers'])
const { waitMember,clubId } = toRefs(props)
console.log(waitMember.value.id)
const introId = waitMember.value.introduction._id
const agreeMember = async()=>{
  try{
    const agree = await $fetch(`/api/club/agree/${waitMember.value.id}`,{
      method:'PATCH',
      body:{id:clubId.value}
    })
    refreshMembers()
    console.log(agree)
  }catch(err){
    console.log(err)
  }
}
const denyMember = async ()=>{
  try{
    const deny = await $fetch(`/api/club/kick/${waitMember.value.id}`,{
      method:'PATCH',
      body:{id:clubId.value,clubIntroId:introId}
    })
    refreshMembers()
    console.log(deny)
  }catch(err){
    console.log(err)
  }
}
const refreshMembers = ()=>{
  emits('refreshMembers')
}
</script>
<style scoped>
.content-frame {
  width: 100%;
}
.avatar {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
}
img {
  width: 24px;
  height: 24px;
}
.name {
  font-size: 16px;
}
.nick-name {
  font-size: 14px;
}
</style>
