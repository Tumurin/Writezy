<template>
  <div class="container">
    <div class="py-3 d-flex flex-md-row flex-column justify-content-md-center">
      <div class="d-flex align-items-center me-3">標籤</div>
      <div class="d-flex align-items-center flex-wrap">
        <template v-for="i in 4">
          <span class="mt-3 me-3 mt-md-0"><TagBlue /></span>
        </template>
      </div>
      <a href="#" class="text-black">
        <Icon name="la:pen" class="fs-3"/>
      </a>
    </div>
  </div>
</template>
<style scoped>

</style>
