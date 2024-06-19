<template>
  <div class="d-flex justify-content-between align-items-center">
    <p class="fw-bold mt-3">簡介</p>
    <a href="#" class="text-black">
    <Icon name="la:pen" class="fs-3"/>
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
