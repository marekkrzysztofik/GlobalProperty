<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue"
import HeroSection from "@/components/HeroSection.vue"
import FeaturedOffers from "@/components/FeaturedOffers.vue"

</script>
<template>
  <Navbar />
  <HeroSection />
  <FeaturedOffers />
  <RouterView />
</template>

<style scoped></style>
