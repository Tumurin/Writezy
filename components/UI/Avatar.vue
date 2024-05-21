<template>
  <div class="user-avatar" @click="goToProfile">
    <img
      :src="avatarUrl || placeholderUrl"
      alt="User Avatar"
      class="avatar-img rounded-circle"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";

// 傳入 用戶頭相 Url & 用戶 ID
const props = defineProps({
  avatarUrl: {
    type: String,
    default: null,
  },
  userId: {
    type: [String, Number],
    required: true,
  },
});

const placeholderUrl = "https://via.placeholder.com/50";

const router = useRouter();

const goToProfile = () => {
  router.push(`/profile/${props.userId}`);
};
</script>

<style scoped>
.user-avatar {
  display: inline-block;
  cursor: pointer;
}

.avatar-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
