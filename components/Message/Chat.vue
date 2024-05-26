<template>
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">
      <div class="avatar rounded-circle"></div>
    </button>
    <div id="chat-show" class="dropdown-menu px-2 py-2">
      <div>
        <span class="d-flex justify-content-between align-items-center">
          <div class="avatar rounded-circle"></div>
          <Icon name="ic:outline-clear"/>
        </span>
        <div class="horizontal-line my-2"></div>
        <p class="text-center">3月16日</p>

        <div class="d-flex justify-content-start ">
          <p class="chat-style d-flex flex-wrap">Lorem ipsum dolor sit amet consectetur<span class="fs-sm text-grey-04">18:09</span></p>
        </div>
        <div class="d-flex justify-content-end flex-wrap">
          <p class="chat-style d-flex flex-wrap">consequuntur libero labore ratione facere!<span class="fs-sm text-grey-04">18:09</span></p>
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <button type="button" class="btn btn-secondary">
            <Icon name="cil:image-plus" class="image-plus"/>
          </button>
          <input class="form-control mx-1" type="text" placeholder="輸入" aria-label="default input example">
          <button type="button" class="btn btn-primary">傳送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.avatar {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
}

.avatar-img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  border-top: solid 1px #ebebed;
}

.chat-style {
  width: 60%;
  background-color: #f2ebfb;
  border-radius: 8px;
  padding: 0.25rem
}

.image-plus {
  font-size: 40px;
}

</style>