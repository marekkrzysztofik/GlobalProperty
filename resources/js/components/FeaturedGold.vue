<template>
  <section class="featured-section">
    <h2 class="section-title">New oferty</h2>

    <div class="slider-wrapper">
      <button class="slider-arrow left" @click="scrollLeft">‹</button>

      <div class="offers-scroll-container" ref="sliderRef">
        <OfferCard
          v-for="offer in offers"
          :key="offer.id"
          v-bind="offer"
        />
      </div>

      <button class="slider-arrow right" @click="scrollRight">›</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import OfferCard from '@/components/OfferCard.vue'

const sliderRef = ref(null)
const currentIndex = ref(0)
const isScrolling = ref(false)

const scrollToIndex = (index) => {
  if (isScrolling.value) return

  isScrolling.value = true
  const card = sliderRef.value?.querySelector('.offer-card')
  if (!card) return

  const cardWidth = card.offsetWidth + 24
  const newScrollLeft = index * cardWidth

  sliderRef.value.scrollTo({
    left: newScrollLeft,
    behavior: 'smooth',
  })

  setTimeout(() => {
    isScrolling.value = false
  }, 2000)
}

const scrollLeft = () => {
  currentIndex.value = Math.max(0, currentIndex.value - 3)
  scrollToIndex(currentIndex.value)
}

const scrollRight = () => {
  const maxIndex = Math.max(0, offers.length - 3)
  currentIndex.value = Math.min(maxIndex, currentIndex.value + 3)
  scrollToIndex(currentIndex.value)
}

const offers = [
  {
    id: 1,
    title: 'Nowoczesny apartament',
    location: 'Warszawa, Śródmieście',
    price: '1 200 000 zł',
    rooms: 3,
    area: 80,
    image: '/images/img2.jpg'
  },
  {
    id: 2,
    title: 'Luksusowa willa',
    location: 'Gdynia, Orłowo',
    rooms: 3,
    area: 50,
    price: '4 500 000 zł',
    image: '/images/img3.jpg'
  },
  {
    id: 3,
    title: 'Stylowy loft',
    location: 'Kraków, Kazimierz',
    rooms: 3,
    area: 120,
    price: '990 000 zł',
    image: '/images/img4.jpg'
  },
  {
    id: 4,
    title: 'Nowoczesny apartament',
    location: 'Warszawa, Śródmieście',
    price: '1 700 000 zł',
    rooms: 3,
    area: 80,
    image: '/images/img2.jpg'
  },
  {
    id: 5,
    title: 'Luksusowa willa',
    location: 'Gdynia, Orłowo',
    rooms: 3,
    area: 50,
    price: '4 700 000 zł',
    image: '/images/img3.jpg'
  },
  {
    id: 6,
    title: 'Stylowy loft',
    location: 'Kraków, Kazimierz',
    rooms: 3,
    area: 120,
    price: '790 000 zł',
    image: '/images/img4.jpg'
  },
]
</script>

<style scoped>
.featured-section {
  max-width: 1400px;
  margin: 80px auto;
  padding: 0 24px;
  position: relative;
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: #d4af37;
  margin-bottom: 48px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.slider-wrapper {
  position: relative;
}

.offers-scroll-container {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 8px 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.offers-scroll-container::-webkit-scrollbar {
  display: none;
}

/* Strzałki */
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(10, 37, 64, 0.8);
  border: 2px solid #d4af37;
  color: #d4af37;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.3s;
}

.slider-arrow:hover {
  background-color: rgba(212, 175, 55, 0.8);
  color: black;
}

.slider-arrow.left {
  left: -16px;
}

.slider-arrow.right {
  right: -16px;
}

/* Responsive zachowanie dla kart wewnątrz slidera */
.offers-scroll-container :deep(.offer-card) {
  flex: 0 0 calc((100% - 48px) / 3); /* 3 elementy + 2x24px */
  scroll-snap-align: start;
  height: 500px;
}

@media (max-width: 1024px) {
  .offers-scroll-container :deep(.offer-card) {
    flex: 0 0 calc((100% - 24px) / 2);
  }
}

@media (max-width: 640px) {
  .offers-scroll-container :deep(.offer-card) {
    flex: 0 0 100%;
  }

  .slider-arrow {
    display: none;
  }
}
</style>
