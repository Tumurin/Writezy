<template>
  <div class="container d-flex ">
    <form class="form-signin wrapper m-auto" autocomplete="off">
      <div class="input-group-clear" style="position:relative">
        <input type="text" id="username" v-model="inputValue" class="form-control" required autofocus>
          <div v-show="!inputValue">
            <span class="input-search">
              <Icon name="material-symbols-light:search" /> 
            </span>
            <span class="input-placeholder">搜尋</span>
          </div>

          <span class="input-clear" v-show="inputValue" @click="clearInput">
            <Icon name="ic:outline-clear"/>
          </span>
      </div>
    </form>
  </div>
</template>

<script setup>
const inputValue = ref('')
const clearInput = () => {
  inputValue.value = ''
};

</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 25.9375rem;
  width: 100%;
}

input:disabled  {
  border-color: $gray-200;
  background-color: $gray-000;
}

.form-control {
  &:focus {
    border-color: $primary-300;
    box-shadow: 0 0px 0px #ccc;
  }
}

.input-placeholder {
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: $gray-600;
}

.input-search {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 111;
  font-size: 20px;
  color: $black;
}
  
.input-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 111;
  font-size: 20px;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  cursor: pointer;
}
</style>