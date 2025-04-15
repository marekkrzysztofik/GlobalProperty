<template>
  <section class="hero-section" :style="{ backgroundImage: `url(${currentImage})` }">
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Lista zdjęć
const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
]

const currentIndex = ref(0)
const currentImage = ref(images[currentIndex.value])

let interval = null

const startSlider = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
    currentImage.value = images[currentIndex.value]
  }, 7000) // zmiana co 5 sekund
}

onMounted(() => {
  startSlider()
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

const goToOffers = () => {
  window.scrollTo({
    top: 600,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 75vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  transition: background-image 1s ease-in-out;
}
</style>
