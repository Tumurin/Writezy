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
            <span class="name d-block">林小明</span>
            <span class="nick-name d-block">稱號</span>
          </div>
        </div>
        <div class="col-md-7 mt-3 mt-md-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          aperiam consequuntur sit beatae id fuga. Minima voluptatibus minus
          sapiente quae aliquid quis. Perspiciatis deserunt culpa soluta sit
          esse incidunt iste.
        </div>
        <div class="col-md-2 d-flex justify-content-evenly mt-md-0 mt-3">
            <span>拒絕</span>
            <span>同意</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content-frame {
  width: 100%;
}
.avatar-name {
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
