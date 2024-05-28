<template>
  <div class="outer-frame p-3 d-flex justify-content-center align-items-center">
    <div class="card border-0 card-wrapper">
      <slot class="card-img-top" name="img"> </slot>
      <div class="card-body card-body-active px-0">
        <div class="d-flex justify-content-start align-items-center">
          <p class="h3 card-title fw-700 me-4">
            <slot name="name"></slot>
          </p>
          <slot name="tags"></slot>
        </div>
        <p class="card-text fw-400 text-grey-08">
          <slot name="description"></slot>
        </p>
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
  background-color: $white;

  &:hover,
  &:active {
    background-color: $primary-000;
  }

  .card-wrapper {
    width: 23rem;

    .tag {
      color: $dark;
    }
    &:hover,
    &:active {
      background-color: $primary-000;
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
