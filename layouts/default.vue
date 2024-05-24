<template>
  <Nav class="sticky-nav m-0 p-0" />

  <!-- 主要內容 -->
  <main>
    <slot />
  </main>
</template>

<script setup></script>

<style>
.sticky-nav {
  top: 0;
  position: sticky;
}
</style>
