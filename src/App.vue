<template>
  <Navbar />

  <div class="container">
    <RouterView />
  </div>

  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>