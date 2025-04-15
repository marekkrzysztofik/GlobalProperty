<template>
    <section class="how-section">
      <h2 class="section-title">Jak to działa?</h2>
      <div class="steps-grid">
        <div
          class="step-box"
          v-for="step in steps"
          :key="step.id"
          @click="handleStepClick(step)"
          :class="{ clickable: step.modal || step.contact }"
        >
          <div class="icon">{{ step.icon }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
        </div>
      </div>
  
     <!-- Modal usług -->
<div v-if="showModal" class="modal-overlay" @click.self="closeModal">
  <div class="modal">
    <button class="close-btn" @click="closeModal">✖</button>
    <h3 class="modal-title">Nasze usługi</h3>

    <div class="service-tile-container" @click="expandTiles = !expandTiles">
      <div class="main-tile">Kliknij, aby zobaczyć usługi</div>
      <transition-group name="tile" tag="div">
        <div
          v-for="(tile, index) in tiles"
          :key="tile"
          class="tile"
          :class="'tile-' + (index + 1)"
          v-show="expandTiles"
        >
          {{ tile }}
        </div>
      </transition-group>
    </div>
  </div>
</div>
  
      <!-- Modal kontakt -->
      <div v-if="showContactModal" class="modal-overlay" @click.self="closeContactModal">
        <div class="modal">
          <button class="close-btn" @click="closeContactModal">✖</button>
          <h3 class="modal-title">Skontaktuj się z nami</h3>
          <ul class="service-list">
            <li>📍 <strong>Oddział Gdynia:</strong><br />+48 500 111 222</li>
            <li>📍 <strong>Oddział Gdańsk:</strong><br />+48 600 333 444</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  
  <script setup>
 import { ref } from 'vue'
 const expandTiles = ref(false)

const tiles = [
  '🏡 Home Staging',
  '📷 Sesja zdjęciowa',
  '📣 Marketing',
  '💬 Negocjacje',
  '📜 Pomoc prawna',
  '🏦 Kredyty'
]
const showModal = ref(false)
const showContactModal = ref(false)

const openModal = () => (showModal.value = true)
const closeModal = () => (showModal.value = false)

const openContactModal = () => (showContactModal.value = true)
const closeContactModal = () => (showContactModal.value = false)

const handleStepClick = (step) => {
  if (step.modal) openModal()
  if (step.contact) openContactModal()
}

const steps = [
  {
    id: 1,
    icon: '📞',
    title: 'Skontaktuj się z nami',
    desc: 'Zadzwoń do jednego z naszych oddziałów.',
    contact: true
  },
  {
    id: 2,
    icon: '🏠',
    title: 'Nasze usługi',
    desc: 'Dowiedz się, co możemy dla Ciebie zrobić.',
    modal: true
  },
  {
    id: 3,
    icon: '👀',
    title: 'Oglądaj i negocjuj',
    desc: 'Umów prezentację, porównaj i złóż ofertę.'
  },
  {
    id: 4,
    icon: '📝',
    title: 'Finalizacja transakcji',
    desc: 'Bezpieczna umowa i wsparcie przy notariuszu.'
  }
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
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 32px;
    justify-content: center;
  }
  
  .step-box {
    background: linear-gradient(135deg, rgba(10, 37, 64, 0.9), rgba(20, 60, 100, 0.85));
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 32px 24px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
    color: white;
  }
  
  .step-box:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 12px 28px rgba(212, 175, 55, 0.25);
  }
  
  .icon {
    font-size: 2.8rem;
    margin-bottom: 20px;
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
    transition: box-shadow 0.3s;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .modal {
    background: white;
    border-radius: 16px;
    padding: 32px;
    width: 90%;
    max-width: 520px;
    text-align: left;
    position: relative;
    animation: zoomIn 0.3s ease;
  }
  
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .modal-title {
    font-size: 1.6rem;
    margin-bottom: 20px;
    color: #0a2540;
  }
  
  .service-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .service-list li {
    margin-bottom: 14px;
    font-size: 1.1rem;
    color: #333;
    display: flex;
    align-items: center;
  }
  
  .close-btn {
    position: absolute;
    top: 12px;
    right: 16px;
    background: none;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    color: #666;
    transition: color 0.3s;
  }
  
  .close-btn:hover {
    color: #d4af37;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 1.6rem;
    }
  
    .step-box {
      text-align: center;
    }
  
    .step-title {
      font-size: 1.2rem;
    }
  
    .step-desc {
      font-size: 0.95rem;
    }
  }

  
  </style>
  