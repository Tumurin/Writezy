<template>
  <div class="d-flex align-items-center justify-content-between">
    <div class="card mt-5 w-50 mx-auto">
      <div class="card-header">登入</div>
      <div class="card-body">
        <VeeForm @submit="submit()" v-slot="{ errors }" class="">
          <div class="form-group row">
            <label for="email" class="form-label col-12 ps-0">Email：</label>
            <VeeField class="col-12" v-model.trim="email" label="email" name="email" type="email" rules="required|email"/>
            <div class="text-red">{{ errors.email }}</div>
          </div>

          <div class="form-group row">
            <label for="password" class="form-label col-12 ps-0">Password：</label>
            <VeeField class="col-12" v-model.trim="password" label="password" name="password" type="password" :rules="rules.password"/>
            <div class="text-red">{{ errors.password }}</div>
          </div>

          <div class="d-flex flex-row-reverse">
            <button @click.prevent="submitForm" class="btn btn-primary m-2">Login</button>
            <!-- 僅在客戶端渲染 -->
            <!-- <ClientOnly>
              <GoogleLogin class="m-2" :callback="googleLogin" />
            </ClientOnly> -->
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script setup>
import SWAL from "sweetalert2";

const email = ref("");
const password = ref("");

const user = useAuthUser();
const { initAuth } = useAuth();

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

onBeforeMount(async () => {
  try {
    // 自動登入
    console.log("進行自動登入程序");
    let result = await initAuth();
    console.log("登入結果：", result);
    if (result) {
      return navigateTo("./");
    }
  } catch (e) {
    console.log("自動登入失敗", e);
  }
});

async function submitForm() {
  // 資料檢查
  if (!email.value) {
    SWAL.fire({
      title: "請輸入帳號",
      icon: "info",
      iconColor: "red",
      showConfirmButton: false,
      confirmButtonText: "確定",
    });
    return;
  }
  if (!password.value) {
    SWAL.fire({
      title: "請輸入密碼",
      icon: "info",
      iconColor: "red",
      showConfirmButton: false,
      confirmButtonText: "確定",
    });
    return;
  }
  // 處理登入流程
  const { login } = useAuth();
  try {
    const logResult = await login(email.value, password.value);
    console.log("登入成功", logResult);
    if (logResult) {
      navigateTo("./");
    }
  } catch (e) {
    // console.log(e);
    SWAL.fire({
      title: "帳號密碼錯誤",
      icon: "error",
      showConfirmButton: false,
      confirmButtonText: "確定",
    });
    return;
  }
}

function googleLogin(response) {
  console.log(response);
}
</script>
