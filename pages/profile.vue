<template>
  <div class="user-profile">
    <div class="d-flex align-items-center mb-4">
      <img :src="userAvatar" alt="User Avatar" class="avatar rounded-circle mr-3" />
      <div class="ms-4">
        <h2>{{ userName }}</h2>
        <p class="text-muted">{{ userTitle }}</p>
      </div>
    </div>
    <div class="banner bg-light p-3 mb-4">
      <span v-for="category in categories" :key="category.id" class="mx-2">{{
        category.name
      }}</span>
    </div>
    <div class="user-posts">
      <div v-for="post in userPosts" :key="post.id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userAvatar = ref("https://via.placeholder.com/150");
const userName = ref("John Doe");
const userTitle = ref("Software Engineer");
const categories = ref([
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
]);
const userPosts = ref([
  { id: 1, title: "Post 1", content: "This is the content of Post 1" },
  { id: 2, title: "Post 2", content: "This is the content of Post 2" },
  { id: 3, title: "Post 3", content: "This is the content of Post 3" },
]);
</script>
