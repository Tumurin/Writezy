<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto flex-column flex-lg-row">
          <li class="nav-item">
            <a class="nav-link" href="#problems">解決問題</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#features">平台特色</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about_us">關於我們</a>
          </li>
          <li class="nav-item">
            <nuxt-link to="/register" class="nav-link"> 註冊帳號 </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login" class="btn btn-primary"> 立即登入 </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
