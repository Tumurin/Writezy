<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid d-flex">
      <div class="row wrapper m-auto align-items-center">
        <div class="col-lg-3 col-md-2 col-2">
          <UILogo></UILogo>
        </div>
        <div class="col-lg-6 col-md-8 col-8">
          <SearchInput></SearchInput>
        </div>
        <div class="col-lg-3 col-md-2 col-2 d-flex justify-content-center d-lg-flex justify-content-lg-end">
          <!-- PC SHOW -->
          <div class="d-lg-block d-none">
            <div class=" collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <ButtonFlatBell class="nav-link me-4"></ButtonFlatBell>
                </li>
                <li class="nav-item">
                  <ButtonFlatNotification class="nav-link me-4"></ButtonFlatNotification>
                </li>
                <li class="nav-item d-flex justify-content-center align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn p-0" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">
                      <img :src="placeholderUrl" alt="User Avatar" class="avatar-img rounded-circle"/>
                    </button>
                    <ul class="avatar-wrapper dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#" @click="goToProfile">前往個人主頁</a></li>
                      <li><a class="dropdown-item" href="#">前往我的社團-程式同好社</a></li>
                      <li><a class="dropdown-item" href="#">建立新社團</a></li>
                      <li><a class="dropdown-item" href="#">編輯主頁</a></li>
                      <li><a class="dropdown-item" href="#">登出</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- MOBILE SHOW -->
          <ButtonFilledBergurMenu class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></ButtonFilledBergurMenu>
        </div>
      </div>
      <!-- MOBILE SHOW -->
      <div class="row d-lg-none d-block mobile-wrapper">
        <div class="col-12">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-start align-items-start">
              <li class="nav-item ">
                <nuxt-link to="/login" class="nav-link">
                  <Icon name="material-symbols:person-outline-rounded" class="fs-4 me-3"/>
                  <span class="fs-8 fw-400">個人頁面</span>
                </nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link to="/login" class="nav-link">
                  <Icon name="ic:baseline-notifications-none" class="fs-4 me-3"/>
                  <span class="fs-8 fw-400">通知</span>
                </nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link to="/login" class="nav-link">
                  <Icon name="material-symbols:inbox-outline" class="fs-4 me-3"/>
                  <span class="fs-8 fw-400">收件夾</span>
                </nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link to="/login" class="nav-link">
                  <Icon name="mdi:tag-outline" class="fs-4 me-3"/>
                  <span class="fs-8 fw-400">我的標籤</span>
                </nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link to="/login" class="nav-link">
                  <Icon name="mdi:heart-outline" class="fs-4 me-3"/>
                  <span class="fs-8 fw-400">我的收藏</span>
                </nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link to="/login" class="nav-link">
                  <Icon name="mdi:fire" class="fs-4 me-3"/>
                  <span class="fs-8 fw-400">熱門標籤</span>
                </nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link to="/login" class="nav-link">
                  <Icon name="ic:sharp-group" class="fs-4 me-3"/>
                  <span class="fs-8 fw-400">好友</span>
                </nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link to="/login" class="nav-link">
                  <Icon name="akar-icons:people-group" class="fs-4 me-3"/>
                  <span class="fs-8 fw-400">社團</span>
                </nuxt-link>
              </li>
            </ul>

            <div class="horizontal-line my-2"></div>
            <div class="avatar rounded-circle"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const placeholderUrl = "https://via.placeholder.com/40";
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 81rem;
  width: 100%;
}

.avatar-wrapper {
  max-width: 400px;
  width: 100%;
}

.avatar-img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
}

.mobile-wrapper {
  max-width: 976;
  width: 100%;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  border-top: solid 1px #d7d7dc;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
}
</style>