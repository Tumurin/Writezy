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
            <ItemsApplyForm class="mb-3" />
            <ItemsApplyForm class="mb-3" />
            <ItemsApplyForm class="mb-3" />
            <div class="d-flex justify-content-end">
              <button type="button" class="refuse-all me-3" @click.prevent="closeModal">全部拒絕</button>
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
const { $bootstrap } = useNuxtApp();
import { ref,onMounted } from "vue";
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