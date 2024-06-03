<!-- RegistrationForm.vue -->
<template>
  <div class="container">
    <div class="card mt-5 w-50 mx-auto">
      <div class="card-header">註冊</div>
      <div class="card-body">
        <div v-if="step === 1" class="registration-form">
          <div class="form-group">
            <label>Name</label>
            <input v-model="name" type="text" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="email" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" class="form-control" required />
          </div>
          <div class="d-flex flex-row-reverse p-2">
            <button @click.prevent="submitForm" class="btn btn-primary mx-auto">
              Register
            </button>
          </div>
        </div>
        <!-- 是否同意使用條款，同意後送出註冊請求 -->
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
