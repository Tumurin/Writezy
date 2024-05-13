<template>
  <nuxt-link to="/landingpage">
    <img class="d-md-block d-none" :src="logo" alt="網站圖標" />
    <img class="d-block d-md-none" :src="logo_md" alt="網站圖標" />
  </nuxt-link>
</template>

<script setup>
import logo from "~/assets/img/Logo.png";
import logo_md from "~/assets/img/Logo-md.png";
</script>
