<template>
  <div class="container">
    <div class="card mt-5 w-50 mx-auto">
      <div class="card-header">註冊</div>
      <div class="card-body">
        <div v-if="step === 1" class="registration-form">
          <RegisterForm @submit="submitForm"></RegisterForm>
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

const step = ref(1);

let registerInfo = {};
function submitForm($event) {
  console.log($event);
  registerInfo = $event;
  step.value = 2;
}

async function registerUser() {
  // 實際註冊邏輯
  try {
    let result = await $fetch("/api/register", {
      method: "POST",
      body: {
        name: registerInfo.name,
        email: registerInfo.email,
        password: registerInfo.password,
      },
    });

    // alert(result.message);
    console.log(result);
    if (result.code == 200) {
      step.value = 3;
      SWAL.fire(`${result.message}`);
      await SWAL.fire({
        icon: "success",
        title: `${result.message}`,
        text: "請回到登入頁進行登入",
      });
      navigateTo("/login");
    } else {
      SWAL.fire({
        title: `錯誤:${result.code}`,
        text: `${result.message}`,
        icon: "error",
        customClass: {
          confirmButton: "btn bg-gradient-success",
        },
      });
    }
  } catch (e) {
    console.log(e);
    // SWAL.fire(`錯誤:${e}`);
  }
}
</script>
