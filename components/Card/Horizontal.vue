<template>
  <div class="card-wrapper d-flex flex-column flex-xl-row">
    <div class="card border-0 p-0 w-50">
      <slot name="img" class="card-img-top"></slot>
    </div>
    <div class="card border-0 w-50">
      <div
        class="card-body p-0 ps-2 ps-lg-5 ms-2 d-flex flex-column justify-content-center"
      >
        <h3 class="card-title text-start fw-700 mb-4">
          <slot name="title"></slot>
        </h3>
        <p class="card-text text-start fw-400">
          <slot name="content"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  width: 81rem;
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
