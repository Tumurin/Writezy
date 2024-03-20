<template>
  <!-- 導航 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Website</a>
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <NuxtLink to="./Register">
              <span class="nav-link"> Register </span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="./Login">
              <span class="nav-link">Login</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- 主要內容 -->
  <div class="container my-5">
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup></script>
