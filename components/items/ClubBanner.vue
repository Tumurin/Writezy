<template>
  <div class="container-fluid">
    <div class="hero-image" :style="{ 'background-image': 'url(' + clubBanner + ')' }">
      <div class="hero-text py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-8 d-flex">
              <div class="club-img rounded-circle position-relative" :style="{ 'background-image': 'url(' + sImage + ')' }">
                <!-- <div
                  class="bg-white rounded-circle position-absolute img-frame top-50 start-50 d-flex justify-content-center align-items-center"
                >
                <Icon name="lucide:image-plus" class="fs-4 text-black bg-white"/>
                </div> -->
              </div>
              <div class="ms-4 d-flex flex-column justify-content-center">
                <span class="d-block fs-2">{{ clubName }}</span>
                <!-- <span class="d-block fs-6">高雄最大軟體學習平台</span> -->
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-end align-items-center">
              <!-- <button
                type="button"
                class="three-dots d-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
              <UIThreeDots/>
              </button> -->
              <button
                class="three-dots d-flex align-items-center justify-content-center"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                v-if="isManager"
              >
              <Icon name="material-symbols:more-horiz" class="fs-3" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a 
                     class="dropdown-item" 
                     href="#"
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal">
                     移除成員
                  </a>
                </li>
                <li>
                  <a class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#applyLists"
                    href="#">申請名單</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="openModal">修改社團</a>
                </li>
              </ul>
              <button
                class="btn add-club rounded-0 text-white ms-3"
                v-if="!isMember"
              >
                加入社團
              </button>
              <button
                class="btn add-club rounded-0 text-white ms-3"
                disabled
                v-if="!status"
              >
                審核中
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalClubRemoveMember :club-members="members" :club-id="clubId" @refresh-members="refreshClub"/>
  <ModalClubApplyList :club-members="members" :club-id="clubId" @refresh-members="refreshClub"/>
    <!-- 社團Modal -->
    <div
      id="productModal"
      ref="modalRef"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-secondary text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span class="text-black">修改社團</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-2">
                  <div class="mb-3">
                    <h3 class="mb-3">主要圖片</h3>
                    <label for="imageUrl" class="form-label">輸入圖片網址</label>
                    <input
                      id="imageUrl"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      v-model="photo"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">上傳檔案</label>
                    <input class="form-control" type="file" id="formFile" ref="formFile" @change=""/>
                  </div>
                  <img class="img-fluid" :src="photo" alt=""/>
                </div>
                <div class="mb-2">
                  <div class="mb-3">
                    <h3 class="mb-3">橫幅圖片</h3>
                    <label for="imagesUrl" class="form-label">輸入圖片網址</label>
                    <input
                      id="imagesUrl"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      v-model="bannerImage"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">上傳檔案</label>
                    <input class="form-control" type="file" id="formFile" ref="formFile" @change=""/>
                  </div>
                  <img class="img-fluid" :src="bannerImage" alt=""/>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">社團名稱</label>
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入社團名稱"
                    v-model="name"
                  />
                </div>
  
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input
                      id="category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                    />
                  </div>
                </div>
  
                <div class="mb-3">
                  <label for="description" class="form-label">社團簡介</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入社團簡介"
                    v-model="content"
                  >
                  </textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="closeModal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="modifyClub"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
const { $bootstrap } = useNuxtApp();
const emits = defineEmits(['refreshClub'])
const props = defineProps({
  clubName:{
    type:String
  },
  clubId:{
    type:String
  },
  clubContent:{
    type:String
  },
  clubBanner:{
    type:String
  },
  userId:{
    type:String
  },
  sImage:{
    type:String
  },
  isManager:{
    type:Boolean
  },
  isMember:{
    type:Boolean
  },
  status:{},
  clubMembers:{
    type:Array
  }
})
const refreshClub = ()=>{
  emits('refreshClub')
}
const {clubName,isManager,isMember,status,clubMembers,clubId,clubContent,sImage,clubBanner} = toRefs(props)
const members = ref([])
watch(clubMembers,()=>{
  members.value = clubMembers.value
  name.value = clubName.value
  photo.value = sImage.value
  content.value = clubContent.value
  bannerImage.value = clubBanner.value
})
// 修改社團相關參數
let modal
const name = ref('')
const photo = ref('')
const content = ref('')
const bannerImage = ref('')
const modalRef = ref(null)
const openModal = ()=>{
  modal.show()
}
const closeModal = ()=>{
  modal.hide()
}
const modifyClub = async()=>{
  const updateClub = await $fetch(`/api/club/modify/${clubId.value}`,{
    method:'PATCH',
    body:{
      name:name.value,
      description:content.value,
      photo:photo.value,
      bannerPhoto:bannerImage.value
    }
  })
  console.log(updateClub)
  refreshClub()
  closeModal()
}
onMounted(() => {
  modal = $bootstrap.modal(modalRef.value)
})
</script>
<style scoped>
.img-frame {
  width: 40px;
  height: 40px;
}
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  padding: 200px 2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
@media (max-width: 767px) {
  .hero-image {
    padding: 100px 2rem;
  }
  .hero-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
  }
}
.club-img {
  /* background-image: url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D); */
  background-position: center;
  background-size: cover;
  width: 80px;
  height: 80px;
}
.three-dots {
  background-color: white;
  color: black;
  width: 40px;
  height: 40px;
}
.add-club {
  width: 96px;
  height: 40px;
  background-color: #8135d8;
  font-size: 16px;
}
</style>