<template>
  <div class="container-fluid">
    <div class="hero-image">
      <div class="hero-text py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-8 d-flex">
              <div class="club-img rounded-circle position-relative">
                <div
                  class="bg-white rounded-circle position-absolute img-frame top-50 start-50 d-flex justify-content-center align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-image text-black bg-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path
                      d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ms-4 d-flex flex-column">
                <span class="d-block fs-2">六角學院</span>
                <span class="d-block fs-6">高雄最大軟體學習平台</span>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-end align-items-center">
              <button
                type="button"
                class="three-dots d-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
                  />
                </svg>
              </button>
              <button
                class="btn add-club rounded-0 text-white ms-3"
                data-bs-toggle="modal"
                data-bs-target="#applyLists"
              >
                加入社團
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="py-3 d-flex flex-md-row flex-column justify-content-md-center">
      <div class="d-flex align-items-center me-3">標籤</div>
      <div class="d-flex align-items-center flex-wrap">
        <template v-for="i in 4">
          <span class="mt-3 me-3 mt-md-0"><TagBlue /></span>
        </template>
      </div>
      <a href="#" class="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
          />
        </svg>
      </a>
    </div>
  </div>

  <div class="container border-top">
    <div class="row">
      <div class="col-md-3 d-flex flex-column introduction">
        <div class="d-flex justify-content-between align-items-center">
          <p class="fw-bold mt-3">簡介</p>
          <a href="#" class="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
              />
            </svg>
          </a>
        </div>

        <p class="fw-bold">
          六角學院致力於濁水溪以南，深耕高雄的學習平台，致力於讓每位學員都
          能順利轉職成功。
        </p>
        <div class="d-flex align-items-center ps-2">
          <div class="img-circle rounded-circle" v-for="i in 10"></div>
        </div>
        <p class="mt-3" style="color: #7f7e88">共一萬名成員</p>
      </div>
      <div class="col-md-6 posts h-100">
        <PostsPostFrame />
        <hr />
        <PostsPostFrame />
        <hr />
      </div>
    </div>
  </div>
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
              v-for="i in 12"
              class="my-2 mx-3"
              @delete-confirm="showModal"
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
            <ItemsMenuItem class="mb-4" />
            <div class="d-flex justify-content-between align-items-center">
              <button
                type="button"
                class="d-block keep-friend rounded-0 text-black"
              >
                保留成員
              </button>
              <button
                type="button"
                class="d-block remove-friend rounded-0 text-white"
              >
                移除成員
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 申請名單Modal -->
  <div
    class="modal fade"
    id="applyLists"
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
            <ItemsApplyForm class="mb-3" />
            <ItemsApplyForm class="mb-3" />
            <ItemsApplyForm class="mb-3" />
            <div class="d-flex justify-content-end">
              <button type="button" class="refuse-all me-3">全部拒絕</button>
              <button type="button" class="agree-all text-white">
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
import { ref, onMounted } from "vue";
const { $bootstrap } = useNuxtApp();

const confirmModal = ref(null);
let myModal;
const showModal = () => {
  myModal.show();
};
onMounted(() => {
  myModal = $bootstrap.modal(confirmModal.value);
});
</script>
<style scoped>
.img-frame {
  width: 40px;
  height: 40px;
}
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.unsplash.com/photo-1537884944318-390069bb8665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D);
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
  background-color: rgba(255, 255, 255, 0.1);
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
  background-image: url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D);
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
.img-circle {
  background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww);
  background-position: center;
  background-size: cover;
  width: 32px;
  height: 32px;
  margin-left: -10px;
}
.introduction {
  border-right: 1px solid #d7d7dc;
}
.posts {
  border-right: 1px solid #d7d7dc;
}
@media (max-width: 767px) {
  .introduction {
    border-right: none;
    border-bottom: 1px solid #d7d7dc;
  }
  .posts {
    border-right: none;
  }
}
</style>
