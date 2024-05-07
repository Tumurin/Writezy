<template>
  <div>
    <div class="form-group">
      <label>Email</label>
      <input v-model="email" type="email" class="form-control" required />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" class="form-control" required />
    </div>
    <button @click.prevent="submitForm" class="btn btn-primary">Login</button>

    <!-- <button type="button" @click="handleGoogleLogin">
      使用 Google 進行登入
    </button>
    <div>{{ userInfo }}</div> -->

    <button class="btn btn-primary ms-3">
      <a href="http://localhost:3005/auth/google" class="text-white" style="text-decoration:none;">使用 Google 進行登入</a>
    </button>
    
  </div>
</template>

<script setup>
import SWAL from "sweetalert2";
// import { googleTokenLogin } from "vue3-google-login";

const email = ref('');
const password = ref('');
const step = ref(1);

const submitForm = async () => {
  let result = await useFetch("https://nodejsproject-r94y.onrender.com/register", {
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
  });

  if (result.code == 200) {
    SWAL.fire(`登入成功`);
    console.log(result);
    const user = useState("user");
    user.value = result.access_token;
  } else {
    SWAL.fire(`錯誤:${result.code}`);
  }
}

// google 第三方登入邏輯
// const runtimeConfig = useRuntimeConfig()
// const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public

// const userInfo = ref(null)
// const handleGoogleLogin = async () => {
//   const accessToken = await googleTokenLogin({
//     clientId: GOOGLE_CLIENT_ID
//   }).then((response) => response?.access_token)

//   if (!accessToken) {
//     // 登入失敗
//     return
//   }
//   // /api/login/google-auth-token
//   // https://nodejsproject-r94y.onrender.com/auth/google
//   // http://localhost:3005/auth/googleClient/callback
//   const { data } = await useFetch('/api/login/google-auth-token', {
//     method: 'POST',
//     body: {
//       accessToken
//     }
//   })

//   userInfo.value = data.value
// }
</script>
