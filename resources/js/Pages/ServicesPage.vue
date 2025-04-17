<template>
    <section class="services-page">
      <h1 class="section-title">Nasze Usługi</h1>
      <p class="section-subtitle">Sprawdź, jak możemy Ci pomóc na każdym etapie procesu nieruchomości.</p>
  
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <component :is="service.icon" class="card-icon" />
          <h3 class="card-title">{{ service.title }}</h3>
          <p class="card-desc">{{ service.description }}</p>
          <img v-if="service.image" :src="service.image" :alt="service.title" class="card-image" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { Home, Handshake, Camera, Hammer, Layers, Grid } from 'lucide-vue-next'
  
  const services = [
    {
      title: 'Sprzedaż nieruchomości',
      icon: Handshake,
      description: 'Pomożemy Ci sprzedać nieruchomość szybko i z zyskiem – od ogłoszenia po finalizację.',
      image: '/img/sprzedaz.jpg'
    },
    {
      title: 'Kupno nieruchomości',
      icon: Home,
      description: 'Znajdziemy dla Ciebie idealny dom lub mieszkanie, bezpiecznie przeprowadzając przez cały proces.',
      image: '/img/kupno.jpg'
    },
    {
      title: 'Home Staging',
      icon: Layers,
      description: 'Profesjonalnie przygotujemy Twoją nieruchomość do sprzedaży, zwiększając jej atrakcyjność.',
      image: '/img/home-staging.jpg'
    },
    {
      title: 'Sesja zdjęciowa',
      icon: Camera,
      description: 'Wykonujemy zdjęcia wnętrz, które przyciągają uwagę – naturalne światło, profesjonalny sprzęt.',
      image: '/img/sesja.jpg'
    },
    {
      title: 'Stolarstwo na wymiar',
      icon: Hammer,
      description: 'Współpracujemy ze stolarzami, którzy przygotują idealne meble pod wymiar do Twojego wnętrza.',
      image: '/img/stolarstwo.jpg'
    },
    {
      title: 'Podwieszane sufity',
      icon: Grid,
      description: 'Zadbamy o nowoczesny wygląd pomieszczeń dzięki lekkim i estetycznym sufitom podwieszanym.',
      image: '/img/sufity.jpg'
    }
  ]
  </script>
  
  <style scoped>
  .services-page {
    max-width: 1200px;
    margin: 100px auto;
    padding: 0 24px;
    text-align: center;
    color: white;
  }
  
  .section-title {
    font-size: 2.4rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    color: #ccc;
    margin-bottom: 48px;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
  }
  
  .service-card {
    background: rgba(10, 37, 64, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 24px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  .service-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(212, 175, 55, 0.2);
  }
  
  .card-icon {
    width: 36px;
    height: 36px;
    stroke: #d4af37;
    margin-bottom: 16px;
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #d4af37;
    margin-bottom: 8px;
  }
  
  .card-desc {
    font-size: 1rem;
    color: #eee;
    margin-bottom: 16px;
  }
  
  .card-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin-top: auto;
  }
  
  @media (max-width: 600px) {
    .section-title {
      font-size: 1.8rem;
    }
    .section-subtitle {
      font-size: 1rem;
    }
  }
  </style>
  