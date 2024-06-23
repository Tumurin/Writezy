<template>
  <!-- 移除成員Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
    >
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex flex-column px-3">
            <div
              class="d-flex justify-content-between w-100 align-items-center px-3 mb-3"
            >
              <h5 class="modal-title fw-bold" id="exampleModalLabel">
                移除成員
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <SearchInput />
            <hr />
          </div>
          <div class="d-flex flex-wrap justify-content-center">
            <ItemsDeleteFriend
              v-for="item in filterMembers"
              class="my-2 mx-3"
              :name="item.name"
              :user-id="item.id"
              @open-modal="showModal"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 確認移除Modal -->
  <div
    class="modal fade"
    ref="confirmModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content py-3">
        <div class="modal-body">
          <div class="d-flex flex-column px-3">
            <div
              class="d-flex justify-content-between w-100 align-items-center"
            >
              <h5 class="modal-title fw-bold" id="exampleModalLabel">
                確認移除成員
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <hr class="mb-4" />
            <ItemsMenuItem class="mb-4" :name="tempDelUser.name"/>
            <div class="d-flex justify-content-between align-items-center">
              <button
                type="button"
                class="d-block keep-friend rounded-0 text-black"
                @click="closeModal"
              >
                保留成員
              </button>
              <button
                type="button"
                class="d-block remove-friend rounded-0 text-white"
                @click="deleteMember"
              >
                移除成員
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  clubMembers:{
    type:Array
  },
  clubId:{
    type:String
  }
})
const emits = defineEmits(['refreshMembers'])
const refreshMembers = ()=>{
  emits('refreshMembers')
}
const {clubMembers,clubId} = toRefs(props)
const { $bootstrap } = useNuxtApp();
const filterMembers = computed(()=>{
  const members = clubMembers.value.filter(item => item.status===true && item.isManager === false)
  return members
})
let myModal;
const tempDelUser = ref({})
const confirmModal = ref(null)
const showModal = (user) => {
  myModal.show()
  console.log(user)
  tempDelUser.value = user
};
const closeModal = ()=>{
  myModal.hide()
}
const deleteMember = async()=>{
  console.log(typeof(tempDelUser.value.userId))
  console.log(typeof(clubId.value))
  try{
    const deleteClubMember =  await $fetch(`/api/club/kick/${tempDelUser.value.userId}`,{
      method:'PATCH',
      body:{id:clubId.value}
    })
    console.log(deleteClubMember)
    myModal.hide()
    refreshMembers()
  }catch(err){
    console.log(err)
  }
}
onMounted(() => {
  myModal = $bootstrap.modal(confirmModal.value)
})
</script>
<style scoped>
.keep-friend {
  width: 200px;
  height: 29px;
  background-color: #ffffff;
  border: #8135d8 1px solid;
}
.remove-friend {
  width: 200px;
  height: 29px;
  background-color: #8135d8;
  border: #8135d8 1px solid;
}
</style>