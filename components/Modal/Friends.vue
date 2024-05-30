<template>
  <!-- modal Button -->
  <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    全部{{ modalName }}
  </div>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">全部{{ modalName }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div>
          <SearchInput></SearchInput>
          <div class="horizontal-line my-3"></div>
        </div>
        <div class="row modal-body px-4">
          <div class="col-3 border p-2 me-2 d-flex justify-content-between align-items-center" v-for="item in props.friendsItems" :key="item.id">
            <div class="d-flex">
              <img
                :src="item.avatarUrl || placeholderUrl"
                alt="Avatar"
                class="avatar-img rounded-circle me-2"
              />
              <div>
                <p class="fs-0 mb-0">林小明</p>
                <p class="fs-8 mb-0">稱號</p>
              </div>
            </div>

            <Icon name="streamline:interface-user-delete-actions-close-delete-deny-fail-geometric-human-person-remove-single-up-user" class="fs-4"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modalName: {
    type: String,
    required: true,
  }
});

const placeholderUrl = "https://placehold.co/32"; // 網路上的佔位圖
</script>

<style lang="scss" scoped>
.modal-header {
  border-bottom: none;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  border-top: solid 1px #cdaeef;
}
</style>