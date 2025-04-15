<template>
  <section class="offers-section">
    <div class="section-header">
      <h2 class="section-title">Nasze oferty</h2>
      <div class="view-toggle">
        <button @click="viewMode = 'grid'" :class="{ active: viewMode === 'grid' }">🔳 Siatka</button>
        <button @click="viewMode = 'list'" :class="{ active: viewMode === 'list' }">📄 Lista</button>
      </div>
    </div>

    <p class="section-desc">
      Przeglądaj wybrane oferty nieruchomości — apartamenty, domy, lofty i więcej. Skontaktuj się z nami, aby poznać szczegóły!
    </p>

    <div :class="['offers-grid', viewMode]">
      <OfferCard
        v-for="offer in offers"
        :key="offer.id"
        v-bind="offer"
        :listView="viewMode === 'list'"
        :reveal="true"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import OfferCard from '@/components/OfferCard.vue'

const viewMode = ref('grid')

const triggerRevealAnimation = () => {
  nextTick(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el, index) => {
      el.classList.remove('revealed')
      setTimeout(() => {
        el.classList.add('revealed')
      }, 100 + index * 150)
    })
  })
}

onMounted(() => {
  triggerRevealAnimation()
})

watch(viewMode, () => {
  triggerRevealAnimation()
})

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
    rooms: 6,
    area: 240,
    price: '4 500 000 zł',
    image: '/images/img3.jpg'
  },
  {
    id: 3,
    title: 'Stylowy loft',
    location: 'Kraków, Kazimierz',
    rooms: 2,
    area: 120,
    price: '990 000 zł',
    image: '/images/img4.jpg'
  },
]
</script>

<style scoped>
.offers-section {
  max-width: 90%;
  margin: 80px auto;
  padding: 0 24px;
  text-align: center;
}

.section-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #d4af37;
  text-transform: uppercase;
}

.section-desc {
  margin: 12px 0 32px;
  color: #ccc;
  font-size: 1rem;
}

.view-toggle button {
  padding: 8px 14px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-toggle button.active {
  background-color: #0a2540;
  color: #fff;
  border-color: #d4af37;
}

.offers-grid {
  display: grid;
  gap: 24px;
}

.offers-grid.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.offers-grid.list {
  grid-template-columns: 1fr;
}

/* Reveal animation */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease;
}

.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* PrimeIcons */
@import url('https://unpkg.com/primeicons/primeicons.css');
</style>
