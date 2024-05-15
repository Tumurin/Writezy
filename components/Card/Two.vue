<template>
  <div class="card-wrapper d-flex flex-column flex-lg-row">
    <div class="card p-0">
      <img :src="rectangle" alt="Google最新AI">
    </div>
    <div class="card">
      <div class="card-body px-2 px-lg-5 d-flex flex-column justify-content-center align-items-center">
        <h2 class="card-title fw-700">Google最新AI</h2>
        <h5 class="card-text fw-400">透過最新 Gemini AI技術，自動幫貼文打上標籤，進行分類 。創作者只須隨心書寫。</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import rectangle from "~/assets/img/rectangle.png";
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 81rem;
}

@include lg {
  .card-wrapper {
    width: 21.9375rem;
  }
}
</style>