<template>
  <div class="outer-frame py-2 px-2 d-flex justify-content-center align-items-center">
    <div class="card border-0 card-wrapper">
      <img :src="smile" class="card-img-top" alt="Google最新AI">
      <div class="card-body card-body-active px-0 ">
        <div class="d-flex justify-content-start align-items-center">
          <p class="h3 card-title fw-700 me-4">寬寬</p>
          <p class="h8 mb-0 badge rounded-pill bg-secondary-00 tag fw-400">#Node 直播班</p>
        </div>

        <p class="h7 card-text fw-400 text-grey-08">Nuxt 前端工程師，熱愛寫Code，經常把鍵盤敲壞。人送外號「鍵盤殺手」，每完成一個專案都需要一個鍵盤當作祭品。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import smile from "~/assets/img/smile.png";
</script>

<style lang="scss" scoped>
.outer-frame {
  z-index: 9;
  width: 26rem;
  border: 1px solid $dark;

  &:hover, &:active {
    background-color: $primary-000;
  }

  .card-wrapper {
    width: 23rem;
    background-color: transparent;

    .tag {
      color: $dark;
    }
  }
}

@include xl {
  .outer-frame {
    width: 18.75rem;
  }
}

@include sm {
  .outer-frame {
    width: 100%;
  }
}
</style>