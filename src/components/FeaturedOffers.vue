<template>
    <section class="featured-section">
      <h2 class="section-title">Top 3 oferty</h2>
      <div class="offers-grid">
        <div
          class="offer-card reveal-on-scroll"
          v-for="offer in offers"
          :key="offer.id"
        >
          <img :src="offer.image" :alt="offer.title" class="offer-image" />
          <div class="offer-content">
            <h3 class="offer-title">{{ offer.title }}</h3>
            <p class="offer-location">{{ offer.location }}</p>
            <p class="offer-price">{{ offer.price }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useRevealOnScroll } from '@/composables/useRevealOnScroll'
  
  useRevealOnScroll()
  
  const offers = [
    {
      id: 1,
      title: 'Nowoczesny apartament w centrum',
      location: 'Warszawa, Śródmieście',
      price: '1 200 000 zł',
      image: '/images/img2.jpg'
    },
    {
      id: 2,
      title: 'Luksusowa willa z basenem',
      location: 'Gdynia, Orłowo',
      price: '4 500 000 zł',
      image: '/images/img3.jpg'
    },
    {
      id: 3,
      title: 'Stylowy loft w kamienicy',
      location: 'Kraków, Kazimierz',
      price: '990 000 zł',
      image: '/images/img4.jpg'
    }
  ]
  </script>
  
  <style scoped>
  .featured-section {
    max-width: 1200px;
    margin: 80px auto;
    padding: 0 16px;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
    color: #1e3a8a;
  }
  
  .offers-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  
  /* Styl startowy przed animacją */
  .reveal-on-scroll {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.6s ease;
  }
  
  /* Styl po wejściu w viewport */
  .reveal-on-scroll.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  .offer-card {
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }
  
  .offer-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  
  .offer-content {
    padding: 16px;
  }
  
  .offer-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .offer-location {
    color: #555;
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
  
  .offer-price {
    color: #1e3a8a;
    font-size: 1rem;
    font-weight: 600;
  }
  </style>
  