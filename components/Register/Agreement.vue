<!-- UserAgreement.vue -->
<template>
  <div class="user-agreement">
    <h3>User Agreement</h3>
    <p>Please read and accept the user agreement:</p>
    <!-- 使用者協議內容 -->
    <div class="text-center">
      <button @click="$emit('agreed')" class="btn btn-success">Accept</button>
      <button @click="$emit('declined')" class="btn btn-danger">Decline</button>
    </div>
  </div>
</template>
