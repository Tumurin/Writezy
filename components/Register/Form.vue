<!-- RegistrationForm.vue -->
<template>
  <VeeForm @submit="submit()" v-slot="{ errors }">
    <div class="row">
      <label for="name" class="form-label col-12 ps-0">Name：</label>
      <VeeField
        class="col-12"
        v-model.trim="registerInfo.name"
        label="name"
        name="name"
        type="text"
        rules="required|min:2"
      />
      <div class="text-red">{{ errors.name }}</div>
    </div>

    <div class="row">
      <label for="email" class="form-label col-12 ps-0">Email：</label>
      <VeeField
        class="col-12"
        v-model.trim="registerInfo.email"
        label="email"
        name="email"
        type="email"
        rules="required|email"
      />
      <div class="text-red">{{ errors.email }}</div>
    </div>

    <div class="row">
      <label for="password" class="form-label col-12 ps-0">Password：</label>
      <VeeField
        class="col-12"
        v-model.trim="registerInfo.password"
        label="password"
        name="password"
        type="password"
        :rules="rules.password"
      />
      <div class="text-red">{{ errors.password }}</div>
    </div>

    <div class="d-flex flex-row-reverse mt-3">
      <button @click.prevent="submitForm" type="submit" class="btn btn-primary ms-auto">
        Register
      </button>
    </div>
  </VeeForm>
</template>

<script setup>
const registerInfo = ref({
  name: "",
  email: "",
  password: "",
});

/* 輸入表單驗證規則 */
const { $validator } = useNuxtApp();
const rules = {
  password: (val) => {
    if (!val) return "密碼 為必填";
    if (!$validator.isLength(val, { min: 8 })) return "密碼需至少 8 碼以上";
    if ($validator.isAlpha(val)) return "密碼不能只有英文";
    if ($validator.isNumeric(val)) return "密碼不能只有數字";
    if (!$validator.isAlphanumeric(val)) return "密碼需至少 8 碼以上，並英數混合";
    return {};
  },
};

const emits = defineEmits(["submit"]);
function submitForm() {
  emits("submit", {
    name: registerInfo.value.name,
    email: registerInfo.value.email,
    password: registerInfo.value.password,
  });
}
</script>
