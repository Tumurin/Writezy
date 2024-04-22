<!-- RegistrationForm.vue -->
<template>
  <ProgressBar :currentStep="step" :totalSteps="3" />
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
    <button @click.prevent="submitForm" class="btn btn-primary">Register</button>
  </div>
  <Agreement v-else-if="step === 2" @agreed="registerUser" @declined="step = 1" />
  <Success v-else-if="step === 3" />
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import Agreement from "./Agreement.vue";
import Success from "./Success.vue";
import SWAL from "sweetalert2";

export default {
  components: {
    ProgressBar,
    Agreement,
    Success,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      step: 1,
    };
  },
  methods: {
    submitForm() {
      this.step = 2;
    },
    async registerUser() {
      // 實際註冊邏輯
      try {
        let result = await $fetch("https://nodejsproject-r94y.onrender.com/register", {
          method: "POST",
          body: {
            name: this.name,
            email: this.email,
            password: this.password,
          },
        });
        alert(result.message);
        console.log(result);
        if (result.status == true) {
          this.step = 3;
          SWAL.fire(`結果:${result.message}`);
        } else {
          SWAL.fire(`錯誤:${result.code}`);
        }
      } catch (e) {
        console.log(e);
        SWAL.fire(`錯誤:${e.status}`);
      }
    },
  },
};
</script>
