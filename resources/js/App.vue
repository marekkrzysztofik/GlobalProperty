<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue"
import HeroSection from "@/components/HeroSection.vue"
import SearchFilters from "@/components/SearchFilters.vue"
import WhyUs from "@/components/WhyUs.vue"
import HowItWorks from "@/components/HowItWorks.vue"
import Footer from "@/components/Footer.vue"
import Agents from '@/components/Agents.vue'
import FeaturedGold from '@/components/FeaturedGold.vue'
import MainPage from '@/Pages/MainPage.vue'

</script>
<template>
  <div class="">
    <Navbar/>
    <router-view />
    <Footer />
  </div>


</template>

<style scoped> 
.padding {
  padding: 0 3rem;
}
</style>
