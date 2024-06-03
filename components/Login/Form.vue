<template>
  <div class="d-flex align-items-center justify-content-between">
    <div class="card mt-5 w-50 mx-auto">
      <div class="card-header">登入</div>
      <div class="card-body">
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <div class="d-flex flex-row-reverse">
          <button @click.prevent="submitForm" class="btn btn-primary m-2">Login</button>
          <!-- 僅在客戶端渲染 -->
          <ClientOnly>
            <GoogleLogin class="m-2" :callback="googleLogin" />
          </ClientOnly>
        </div>
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
