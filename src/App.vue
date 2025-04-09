<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue"
import HeroSection from "@/components/HeroSection.vue"
import FeaturedOffers from "@/components/FeaturedOffers.vue"
import SearchFilters from "@/components/SearchFilters.vue"
import WhyUs from "@/components/WhyUs.vue"
import HowItWorks from "@/components/HowItWorks.vue"
import Footer from "@/components/Footer.vue"

</script>
<template>
  <Navbar />
  <HeroSection />
  <SearchFilters/>
  <FeaturedOffers />
  <WhyUs/>
  <HowItWorks/>
  <Footer/>
  <RouterView />
</template>

<style scoped>


</style>
