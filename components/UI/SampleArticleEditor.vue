<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <textarea
        v-model="content"
        class="form-control"
        rows="5"
        ref="userInputArea"
        required
        @input="resizeTextarea"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary">提交</button>
    </div>
  </form>
</template>

<script setup>
const content = ref("");
const userInputArea = ref(null);
const emit = defineEmits(["submit"]);

const handleSubmit = () => {
  emit("submit", content.value);
  content.value = "";
  resizeTextarea();
};

const resizeTextarea = () => {
  if (userInputArea.value) {
    userInputArea.value.style.height = "auto";
    userInputArea.value.style.height = `${userInputArea.value.scrollHeight}px`;
  }
};

onMounted(() => {
  resizeTextarea();
});
</script>

<style scoped>
/* 防止出現滾動條 */
form {
  overflow-x: hidden;
  overflow-y: hidden;
}
::-webkit-scrollbar {
  display: none;
}
</style>
