<template>
  <div class="btn-group">
    <button type="button" class="btn btn-flat btn-xs p-0" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">
      <Icon name="material-symbols:inbox-outline" class="fs-4 text-center"/>
    </button>
    <div class="wrapper dropdown-menu dropdown-menu-end">
      <div>收件夾</div>
      <div class="horizontal-line my-1"></div>
      <p>你有一封新訊息</p>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 400px;
  width: 100%;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  border-top: solid 1px #cdaeef;
}
</style>