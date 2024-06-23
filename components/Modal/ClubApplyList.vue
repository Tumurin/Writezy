<template>
  <!-- 申請名單Modal -->
  <div
    class="modal fade"
    id="applyLists"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div
      class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
    >
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex flex-column px-3">
            <div
              class="d-flex justify-content-between w-100 align-items-center mb-3"
            >
              <h5 class="modal-title fw-bold" id="exampleModalLabel">
                申請名單
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <hr />
          </div>
          <div class="container">
            <ItemsApplyForm class="mb-3" v-for="item in filterMembers" :wait-member="item" :club-id="clubId" @refresh-members="refreshMembers"/>
            <div class="d-flex justify-content-end">
              <button type="button" class="refuse-all me-3" @click="denyAll">全部拒絕</button>
              <button type="button" class="agree-all text-white" @click="agreeAll">
                全部同意
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { $bootstrap } = useNuxtApp();
const props = defineProps(['clubMembers','clubId'])
const emits = defineEmits(['refreshMembers'])
const refreshMembers = ()=>{
  emits('refreshMembers')
}
const {clubMembers,clubId} = toRefs(props)
const filterMembers = computed(()=>{
  const waitList = clubMembers.value.filter((item)=>item.status === false)
  return waitList
})
console.log(filterMembers.value)
const agreeAll = async()=>{
  filterMembers.value.forEach(async(item)=>{
    try{
    const agree = await $fetch(`/api/club/agree/${item.id}`,{
      method:'PATCH',
      body:{id:clubId.value}
    })
    console.log(agree)
    refreshMembers()
    closeModal()
  }catch(err){
    console.log(err)
  }
  })
}
const denyAll = async()=>{
  filterMembers.value.forEach(async(item)=>{
    try{
      const deny = await $fetch(`/api/club/kick/${item.id}`,{
        method:'PATCH',
        body:{id:clubId.value,clubIntroId:item.introduction._id}
      })
      refreshMembers()
      console.log(deny)
      closeModal()
    }catch(err){
      console.log(err)
    }
  })
}
console.log(filterMembers)
let myModal;
const modal = ref(null);
const showModal = () => {
  myModal.show();
};
const closeModal = ()=>{
    myModal.hide();
}
onMounted(() => {
  myModal = $bootstrap.modal(modal.value);
});
</script>
<style scoped>
.refuse-all {
  width: 72px;
  height: 29px;
  font-size: 14px;
  background-color: #ffffff;
  border: #8135d8 1px solid;
}
.agree-all {
  width: 72px;
  height: 29px;
  font-size: 14px;
  background-color: #8135d8;
  border: #8135d8 1px solid;
}
</style>