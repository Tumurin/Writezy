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
    <!-- 僅在客戶端渲染 -->
    <ClientOnly>
      <GoogleLogin :callback="googleLogin" />
    </ClientOnly>
  </div>
</template>

<script>
import SWAL from "sweetalert2";
export default {
  data() {
    return {
      email: "",
      password: "",
      step: 1,
    };
  },
  methods: {
    async submitForm() {
      let result = await $fetch("https://nodejsproject-r94y.onrender.com/login", {
        method: "POST",
        body: {
          email: this.email,
          password: this.password,
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
    },
    googleLogin(response) {
      console.log(response);
    },
  },
};
</script>
