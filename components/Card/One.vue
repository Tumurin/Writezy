<template>
  <div class="card card-wrapper">
    <img :src="people" class="card-img-top" alt="Google最新AI">
    <div class="card-body">
      <h2 class="card-title text-center fw-700">Google最新AI</h2>
      <p class="card-text fw-400">透過最新 Gemini AI技術，自動幫貼文打上標籤，進行分類 。創作者只須隨心書寫。</p>
    </div>
  </div>
</template>

<script setup>
import people from "~/assets/img/people.png";
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 38rem;
}

@include md {
  .card-wrapper {
    width: 21.9375rem;
  }
}
</style>