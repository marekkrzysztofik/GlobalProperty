<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue"
import HeroSection from "@/components/HeroSection.vue"
import FeaturedOffers from "@/components/FeaturedOffers.vue"
import SearchFilters from "@/components/SearchFilters.vue"
import WhyUs from "@/components/WhyUs.vue"
import HowItWorks from "@/components/HowItWorks.vue"
import Footer from "@/components/Footer.vue"
import FeaturedGold from '@/components/FeaturedGold.vue'
import Agents from '@/components/Agents.vue'
import Offers from '@/components/Offers.vue'
import Services from '@/components/Services.vue'

</script>
<template>
    <HeroSection /> 
    <SearchFilters />
    <FeaturedGold />
    <HowItWorks />
    <Services/>
</template>

<style scoped></style>
