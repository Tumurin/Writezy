<!-- RegistrationForm.vue -->
<template>
  <div class="container">
    <div class="card mt-5 w-50 mx-auto">
      <div class="card-header">註冊</div>
      <div class="card-body">
        <div v-if="step === 1" class="registration-form">
          <VeeForm @submit="submit()" v-slot="{ errors }">
            <div class="row">
              <label for="name" class="form-label col-12 ps-0">Name：</label>
              <VeeField class="col-12" v-model.trim="name" label="name" name="name" type="text" rules="required|min:2"/>
              <div class="text-red">{{ errors.name }}</div>
            </div>

            <div class="row">
              <label for="email" class="form-label col-12 ps-0">Email：</label>
              <VeeField class="col-12" v-model.trim="email" label="email" name="email" type="email" rules="required|email"/>
              <div class="text-red">{{ errors.email }}</div>
            </div>

            <div class="row">
              <label for="password" class="form-label col-12 ps-0">Password：</label>
              <VeeField class="col-12" v-model.trim="password" label="password" name="password" type="password" :rules="rules.password"/>
              <div class="text-red">{{ errors.password }}</div>
            </div>
            
            <div class="d-flex flex-row-reverse mt-3">
              <button @click.prevent="submitForm" type="submit" class="btn btn-primary ms-auto">
                Register
              </button>
            </div>
          </VeeForm>
        </div>
        
        <RegisterAgreement
          v-else-if="step === 2"
          @agreed="registerUser"
          @declined="step = 1"
        />
        <RegisterSuccess v-else-if="step === 3" />
      </div>
    </div>
    <RegisterProgressBar class="w-50 mx-auto my-2" :currentStep="step" :totalSteps="3" />
  </div>
</template>

<script setup>
import SWAL from "sweetalert2";

const name = ref("");
const email = ref("");
const password = ref("");
const step = ref(1);

/* 輸入表單驗證規則 */
const { $validator } = useNuxtApp()
const rules = {
  password: (val) => {
    if (!val) return '密碼 為必填'
    if (!$validator.isLength(val, { min: 8 })) return '密碼需至少 8 碼以上'
    if ($validator.isAlpha(val)) return '密碼不能只有英文'
    if ($validator.isNumeric(val)) return '密碼不能只有數字'
    if (!$validator.isAlphanumeric(val)) return '密碼需至少 8 碼以上，並英數混合'
    return {}
  },
}

function submitForm() {
  step.value = 2;
}
async function registerUser() {
  // 實際註冊邏輯
  try {
    let result = await $fetch("/api/register", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
      },
    });

    alert(result.message);
    console.log(result);
    if (result.status == true) {
      step.value = 3;
      SWAL.fire(`結果:${result.message}`);
    } else {
      SWAL.fire(`錯誤:${result.code}`);
    }
  } catch (e) {
    console.log(e);
    SWAL.fire(`錯誤:${e.status}`);
  }
}
</script>
