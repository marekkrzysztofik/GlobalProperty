<template>
    <section class="how-section">
      <h2 class="section-title">Dla Ciebie</h2>
      <div class="steps-grid">
        <!-- Kontakt -->
        <div class="step-box clickable" @click="toggleContact">
          <div class="icon"><Phone class="icon-svg" /></div>
          <h3 class="step-title">Skontaktuj się z nami</h3>
          <p class="step-desc">Zadzwoń do jednego z naszych oddziałów.</p>
  
          <transition name="fade">
            <div v-if="showContact" class="expanded-content">
              <ul class="contact-list">
                <li><strong>📍 Gdynia:</strong><br />+48 500 111 222</li>
                <li><strong>📍 Gdańsk:</strong><br />+48 600 333 444</li>
              </ul>
            </div>
          </transition>
        </div>
  
        <!-- Usługi -->
        <div class="step-box clickable" @click="toggleServices">
          <div class="icon"><Layers class="icon-svg" /></div>
          <h3 class="step-title">Nasze usługi</h3>
          <p class="step-desc">Zobacz, co możemy dla Ciebie zrobić.</p>
  
          <transition name="fade">
            <div v-if="showServices" class="expanded-content">
              <div class="tile-grid">
                <div v-for="(tile, index) in tiles" :key="index" class="tile">
                  <component :is="tile.icon" class="tile-icon" />
                  <div>{{ tile.label }}</div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Lucide ikony jako komponenty
  import {
    Phone,
    Layers,
    Home,
    Camera,
    Megaphone,
    Handshake,
    Scale,
    CreditCard
  } from 'lucide-vue-next'
  
  const showContact = ref(false)
  const showServices = ref(false)
  
  const toggleContact = () => {
    showContact.value = !showContact.value
    if (showContact.value) showServices.value = false
  }
  const toggleServices = () => {
    showServices.value = !showServices.value
    if (showServices.value) showContact.value = false
  }
  
  const tiles = [
    { label: 'Home Staging', icon: Home },
    { label: 'Sesja zdjęciowa', icon: Camera },
    { label: 'Marketing', icon: Megaphone },
    { label: 'Negocjacje', icon: Handshake },
    { label: 'Pomoc prawna', icon: Scale },
    { label: 'Kredyty', icon: CreditCard }
  ]
  </script>
  
  <style scoped>
  .how-section {
    max-width: 1200px;
    margin: 100px auto;
    padding: 0 24px;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 48px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    justify-content: center;
  }
  
  .step-box {
    background: rgba(10, 37, 64, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: 32px 24px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
    color: white;
    position: relative;
  }
  
  .step-box:hover {
    transform: translateY(-8px) scale(1.015);
    box-shadow: 0 12px 28px rgba(212, 175, 55, 0.25);
  }
  
  .icon-svg {
    width: 36px;
    height: 36px;
    stroke: #d4af37;
    margin-bottom: 16px;
  }
  
  .step-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #d4af37;
  }
  
  .step-desc {
    font-size: 1rem;
    line-height: 1.5;
    color: #eee;
  }
  
  .clickable {
    cursor: pointer;
  }
  
  .expanded-content {
    margin-top: 20px;
  }
  
  .contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #fff;
  }
  
  .contact-list li {
    margin-bottom: 12px;
    font-size: 1rem;
  }
  
  .tile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 16px;
    margin-top: 8px;
  }
  
  .tile {
    background: rgba(255, 255, 255, 0.07);
    border-radius: 10px;
    padding: 14px;
    text-align: center;
    font-size: 0.95rem;
    color: #fff;
    transition: background 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .tile-icon {
    width: 24px;
    height: 24px;
    stroke: #d4af37;
  }
  
  .tile:hover {
    background: rgba(255, 255, 255, 0.13);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>
  