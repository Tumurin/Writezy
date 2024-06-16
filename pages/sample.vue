<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h3>创建标签集合</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="collectionName" class="form-label">集合名称</label>
                <input
                  id="collectionName"
                  v-model="collectionName"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="tags" class="form-label">标签 (用逗号分隔)</label>
                <input id="tags" v-model="tags" class="form-control" required />
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">创建</button>
              </div>
            </form>
            <div v-if="message" class="alert alert-success mt-3">
              {{ message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const collectionName = ref("");
const tags = ref("");
const message = ref("");

const handleSubmit = async () => {
  try {
    const tagArray = tags.value.split(",").map((tag) => tag.trim());
    const res = await fetch("/api/tag", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: collectionName.value, tags: tagArray }),
    });
    const data = await res.json();
    message.value = data.message;
    collectionName.value = "";
    tags.value = "";
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>
