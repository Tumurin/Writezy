<template>
  <div
    class="frame border border-1 d-flex justify-content-center align-items-center"
  >
    <div
      class="content-frame d-flex justify-content-between align-items-center"
    >
      <div
        class="avatar-name d-flex justify-content-between align-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
          />
          <path
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
          />
        </svg>
        <div class="ms-4">
          <span class="d-block">Search</span>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
        />
      </svg>
    </div>
  </div>
</template>
<style scoped>
.frame {
  width: 240px;
  height: 73px;
}
.content-frame {
  width: 216px;
  height: 49px;
}
.avatar-name {
  height: 49px;
}
.avatar {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
}
img {
  width: 24px;
  height: 24px;
}
.name {
  font-size: 16px;
}
.detail {
  font-size: 14px;
  color: #7f7e88;
}
</style>
