<template>
  <div class="container-fluid">
    <div class="hero-image">
      <div class="hero-text py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-8 d-flex">
              <div class="club-img rounded-circle"></div>
              <div class="ms-4 d-flex flex-column">
                <span class="d-block fs-2">六角學院</span>
                <span class="d-block fs-6">高雄最大軟體學習平台</span>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-end align-items-center">
              <div class="three-dots d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
                  />
                </svg>
              </div>
              <button class="btn add-club rounded-0 text-white ms-3">加入社團</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="py-3 d-flex flex-md-row flex-column justify-content-md-center">
      <div class="d-flex align-items-center me-3">
        標籤
      </div>
      <div class="d-flex align-items-center flex-wrap">
        <template v-for="i in 4">
          <span class=" mt-3 me-3 mt-md-0"><TagBlue/></span>
        </template>
      </div>
    </div>
  </div>
  
  <div class="container border-top">
    <div class="row">
      <div class="col-md-3 d-flex flex-column introduction">
        <p class="fw-bold mt-3">簡介</p>
        <p class="fw-bold">六角學院致力於濁水溪以南，深耕高雄的學習平台，致力於讓每位學員都
            能順利轉職成功。
        </p>
        <div class="d-flex align-items-center ps-2">
          <div class="img-circle rounded-circle" v-for="i in 10"></div>
        </div>
        <p class="mt-3" style="color: #7F7E88;">共一萬名成員</p>
      </div>
      <div class="col-md-6 posts h-100">
          <PostsPostFrame/>
          <hr>
          <PostsPostFrame/>
          <hr>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.unsplash.com/photo-1537884944318-390069bb8665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D);
  padding: 200px 2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}
@media (max-width: 767px) {
  .hero-image {
    padding: 100px 2rem;
  }
  .hero-text{
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:transparent;
}
}

.club-img {
  background-image: url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D);
  background-position: center;
  background-size: cover;
  width: 80px;
  height: 80px;
}
.three-dots{
    background-color: white;
    color: black;
    width: 40px;
    height: 40px;
}
.add-club{
    width: 96px;
    height: 40px;
    background-color: #8135D8;
    font-size: 16px;
}
.img-circle{
  background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww);
  background-position: center;
  background-size: cover;
  width: 32px;
  height: 32px;
  margin-left: -10px;
}
.introduction{
  border-right: 1px solid #D7D7DC;
}
.posts{
  border-right: 1px solid #D7D7DC;
}
@media (max-width: 767px) {
  .introduction{
  border-right: none;
  border-bottom: 1px solid #D7D7DC;
}
  .posts{
  border-right: none;
}
}
</style>
