<template>
  <div class="d-flex justify-content-between align-items-center">
    <p class="fw-bold mt-3">簡介</p>
    <a href="#" class="text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-pencil"
        viewBox="0 0 16 16"
      >
        <path
          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
        />
      </svg>
    </a>
  </div>
  <p class="fw-bold">
    六角學院致力於濁水溪以南，深耕高雄的學習平台，致力於讓每位學員都
    能順利轉職成功。
  </p>
  <div class="d-flex align-items-center ps-2">
    <div class="img-circle rounded-circle" v-for="i in 10"></div>
  </div>
  <p class="mt-3" style="color: #7f7e88">共一萬名成員</p>
</template>
<style scoped>
.img-circle {
  background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww);
  background-position: center;
  background-size: cover;
  width: 32px;
  height: 32px;
  margin-left: -10px;
}
.introduction {
  border-right: 1px solid #d7d7dc;
}
.posts {
  border-right: 1px solid #d7d7dc;
}
@media (max-width: 767px) {
  .introduction {
    border-right: none;
    border-bottom: 1px solid #d7d7dc;
  }
  .posts {
    border-right: none;
  }
}
</style>
