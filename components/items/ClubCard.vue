<template>
  <div class="frame p-2 border border-1 p-3 container">
    <div class="row justify-content-between">
      <div class="rounded-circle avatar col-1"></div>
      <div class="col-9">
        <span class="d-block mb-1">社團名稱</span>
        <span class="d-9lock info mb-1">公開·2152位成員</span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a
          debitis quibusdam vero aspernatur non, ad molestias. Perferendis
          deserunt, aperiam laboriosam, assumenda neque vel maiores suscipit
          officiis totam magni quidem?
        </div>
      </div>
      <div class="col-2 d-flex justify-content-end align-items-center">
        <button class="border border-0 px-3 py-2">加入社團</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.frame {
  max-width: 753px;
  height: 100%;
}
.avatar {
  width: 40px;
  height: 40px;
  background: #d9d9d9;
}
.info {
  font: 12px;
  color: #7f7e88;
}
button {
  background: #8135d8;
  color: white;
}
</style>
