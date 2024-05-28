<template>
  <div class="card card-wrapper">
    <slot name="img" class="card-img-top"></slot>
    <div class="card-body">
      <h2 class="card-title text-center fw-700 my-3">
        <slot name="title"></slot>
      </h2>
      <p class="card-text fw-400">
        <slot name="content"></slot>
        透過最新 Gemini AI技術，自動幫貼文打上標籤，進行分類 。創作者只須隨心書寫。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  width: 38rem;
}

@include xl {
  .card-wrapper {
    width: 21.9375rem;
  }
}

@include sm {
  .card-wrapper {
    width: 100%;
  }
}
</style>
