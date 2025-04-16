<template>
    <section class="offer-details-page">
      <div class="container">
        <router-link to="/oferty" class="back-link">← Powrót do ofert</router-link>
  
        <div class="main-content">
          <!-- LEWA -->
          <div class="main-photo-wrapper" @click="openLightbox(currentIndex)">
            <img :src="currentImage" alt="Zdjęcie główne" class="main-photo" />
            <div class="thumbnails">
              <img
                v-for="(img, index) in offer.images"
                :key="index"
                :src="img"
                :class="{ active: currentIndex === index }"
                @click.stop="selectImage(index)"
              />
            </div>
          </div>
  
          <!-- PRAWA -->
          <div class="details-wrapper">
            <h1 class="offer-title">{{ offer.title }}</h1>
            <p class="location"><MapPin class="icon" /> {{ offer.location }}</p>
            <p class="price">{{ offer.price }}</p>
  
            <ul class="details-list">
              <li><Ruler class="icon" /> Powierzchnia: <strong>{{ offer.area }} m²</strong></li>
              <li><BedDouble class="icon" /> Pokoje: <strong>{{ offer.rooms }}</strong></li>
              <li><BarChart class="icon" /> Piętro: <strong>{{ offer.floor }}</strong></li>
              <li><Calendar class="icon" /> Rok budowy: <strong>{{ offer.year }}</strong></li>
            </ul>
          </div>
        </div>
  
        <!-- OPIS -->
        <div class="description">
          <h2>Opis nieruchomości</h2>
          <p>{{ offer.description }}</p>
        </div>
  
        <!-- FORMULARZ -->
        <div class="contact-form">
          <h3>Zainteresowany tą ofertą?</h3>
          <p>Wypełnij formularz, a odezwiemy się do Ciebie!</p>
          <form @submit.prevent="submitForm">
            <input type="text" v-model="form.name" placeholder="Imię i nazwisko" required />
            <input type="email" v-model="form.email" placeholder="Adres e-mail" required />
            <textarea v-model="form.message" rows="4" placeholder="Wiadomość" required></textarea>
            <button type="submit">📩 Wyślij zapytanie</button>
          </form>
        </div>
      </div>
  
      <!-- LIGHTBOX -->
      <div v-if="showLightbox" class="lightbox-overlay" @click.self="closeLightbox">
        <div class="lightbox-content">
          <button class="close-btn" @click="closeLightbox">✖</button>
          <button class="nav left" @click="prevImage">‹</button>
          <img :src="offer.images[lightboxIndex]" class="lightbox-image" />
          <button class="nav right" @click="nextImage">›</button>
          <div class="lightbox-thumbnails">
            <img
              v-for="(img, index) in offer.images"
              :key="index"
              :src="img"
              :class="{ active: index === lightboxIndex }"
              @click="openLightbox(index)"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    MapPin,
    Ruler,
    BedDouble,
    BarChart,
    Calendar
  } from 'lucide-vue-next'
  
  const offer = ref({
    title: 'Stylowy loft z widokiem na rzekę',
    location: 'Kraków, Kazimierz',
    price: '990 000 zł',
    area: 120,
    rooms: 3,
    floor: 2,
    year: 2018,
    description:
      'Stylowy, nowoczesny loft w sercu Kazimierza. Wysokie sufity, duże okna i bliskość restauracji oraz Bulwarów Wiślanych.',
    images: ['/images/img4.jpg', '/images/img3.jpg', '/images/img2.jpg']
  })
  
  const currentIndex = ref(0)
  const currentImage = ref(offer.value.images[0])
  
  const showLightbox = ref(false)
  const lightboxIndex = ref(0)
  
  function selectImage(index) {
    currentIndex.value = index
    currentImage.value = offer.value.images[index]
  }
  
  function openLightbox(index) {
    showLightbox.value = true
    lightboxIndex.value = index
  }
  
  function closeLightbox() {
    showLightbox.value = false
  }
  
  function nextImage() {
    lightboxIndex.value = (lightboxIndex.value + 1) % offer.value.images.length
  }
  
  function prevImage() {
    lightboxIndex.value =
      (lightboxIndex.value - 1 + offer.value.images.length) % offer.value.images.length
  }
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  function submitForm() {
    alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.')
    form.value = { name: '', email: '', message: '' }
  }
  </script>
  
  <style scoped>
  .offer-details-page {
    background-color: #0a2540;
    color: white;
    padding: 60px 24px 100px;
  }
  
  .container {
    max-width: 1100px;
    margin: 0 auto;
    font-size: 1.1rem;
  }
  
  .back-link {
    color: #d4af37;
    margin-bottom: 24px;
    display: inline-block;
    text-decoration: none;
  }
  
  .main-content {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
  }
  
  .main-photo-wrapper {
    flex: 1 1 50%;
    cursor: zoom-in;
  }
  
  .main-photo {
    width: 100%;
    border-radius: 12px;
    max-height: 400px;
    object-fit: cover;
  }
  
  .thumbnails {
    margin-top: 12px;
    display: flex;
    gap: 10px;
  }
  
  .thumbnails img {
    width: 80px;
    height: 60px;
    border-radius: 6px;
    object-fit: cover;
    border: 2px solid transparent;
    cursor: pointer;
  }
  
  .thumbnails img.active,
  .thumbnails img:hover {
    border-color: #d4af37;
  }
  
  .details-wrapper {
    flex: 1 1 40%;
  }
  
  .offer-title {
    font-size: 2rem;
    color: #d4af37;
  }
  
  .location {
    color: #ccc;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 12px 0;
  }
  
  .price {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
  }
  
  .details-list {
    list-style: none;
    padding: 0;
  }
  
  .details-list li {
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .icon {
    width: 20px;
    height: 20px;
    stroke: #d4af37;
  }
  
  .description {
    margin: 40px 0 60px;
  }
  
  .description h2 {
    font-size: 1.5rem;
    color: #d4af37;
    margin-bottom: 12px;
  }
  
  .contact-form {
    background: rgba(255, 255, 255, 0.06);
    padding: 40px;
    border-radius: 16px;
    text-align: center;
  }
  
  .contact-form h3 {
    color: #d4af37;
    font-size: 1.6rem;
    margin-bottom: 12px;
  }
  
  .contact-form form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 14px;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    color: #0a2540;
  }
  
  .contact-form button {
    background-color: #d4af37;
    color: #0a2540;
    padding: 14px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
  
  .contact-form button:hover {
    background-color: #e0c45c;
  }
  
  /* Lightbox */
  .lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 20, 40, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    flex-direction: column;
    padding: 20px;
  }
  
  .lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .lightbox-image {
    max-height: 70vh;
    max-width: 100%;
    border-radius: 12px;
    object-fit: contain;
  }
  
  .lightbox-thumbnails {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    overflow-x: auto;
  }
  
  .lightbox-thumbnails img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
    border: 2px solid transparent;
  }
  
  .lightbox-thumbnails img.active,
  .lightbox-thumbnails img:hover {
    border-color: #d4af37;
  }
  
  .close-btn {
    position: absolute;
    top: -40px;
    right: 0;
    font-size: 1.8rem;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  
  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 50%;
  }
  
  .nav.left {
    left: -50px;
  }
  .nav.right {
    right: -50px;
  }
  
  @media (max-width: 768px) {
    .main-content {
      flex-direction: column;
    }
  }
  </style>
  