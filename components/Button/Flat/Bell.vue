<template>
  <div class="btn-group">
    <button type="button" class="btn btn-flat btn-xs p-0" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">
      <Icon name="material-symbols:notifications-outline" class="fs-4 text-center"/>
    </button>
    <div class="wrapper dropdown-menu dropdown-menu-end">
      <div class="tabs">
        <span class="me-auto d-flex justify-content-center align-items-center">通知</span>
        <!-- tab group -->
        <input type="radio" id="tab-1" name="tab" checked="checked">
        <label for="tab-1">未讀</label>
        <div class="tab-content">
          <div class="horizontal-line mb-1"></div>
          Content 1
        </div>

        <input type="radio" name="tab" id="tab-2">
        <label for="tab-2">全部</label>
        <div class="tab-content">
          <div class="horizontal-line mb-1"></div>
          Content 2
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 400px;
  width: 100%;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  input[type="radio"] {
    display: none;

    &:checked {
      + label {
        color: #4d2082;
        background-color: white;
        transform: translatey(1px);
        
        + .tab-content {
          display: block;
        }
      }
    }
  }

  label {
    padding: 0.5em 0.75em;
    color: #ccc;
    cursor: pointer;
    order: 0;
    &:hover{
      color: rgb(15, 16, 15);
    }
  }

  .tab-content {
    display: none;
    padding: 1rem 0.75rem;
    width: 100%;
    order: 1;
  }

  .horizontal-line {
    width: 100%;
    height: 1px;
    border-top: solid 1px #cdaeef;
  }
}

</style>