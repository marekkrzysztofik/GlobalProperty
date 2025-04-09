<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue"
import HeroSection from "@/components/HeroSection.vue"

</script>
<template>
 <Navbar/>
 <HeroSection/>
  <RouterView />
</template>

<style scoped>

</style>
