<template>
  <div
    class="offer-card"
    :class="{ 'list-view': listView, 'reveal-on-scroll': reveal }"
  >
    <div class="image-wrapper">
      <img :src="image" :alt="title" class="offer-image" />
    </div>

    <div class="offer-info">
      <div class="offer-location">
        <i class="pi pi-map-marker"></i>
        <span>{{ location }}</span>
      </div>

      <div class="offer-header">
        <h3>{{ title }}</h3>
        <strong class="offer-price">{{ price }}</strong>
      </div>

      <div class="offer-details">
        <div class="detail-item">
          <i class="pi pi-home"></i>
          <span>{{ rooms }} pokoje</span>
        </div>
        <div class="detail-item">
          <i class="pi pi-arrows-alt"></i>
          <span>{{ area }} m²</span>
        </div>
      </div>

      <div class="offer-actions">
        <button class="details-button">Zobacz szczegóły</button>
        <button class="favorite-button" @click.stop="toggleFavorite">
          <Heart
            :class="{ active: isFavorite }"
            :fill="isFavorite ? '#d4af37' : 'none'"
            stroke="#d4af37"
            stroke-width="2"
            size="24"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Heart } from 'lucide-vue-next'

defineProps({
  image: String,
  title: String,
  location: String,
  price: String,
  rooms: Number,
  area: Number,
  listView: Boolean,
  reveal: {
    type: Boolean,
    default: false
  }
})

const isFavorite = ref(false)
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}
</script>

<style scoped>
.offer-card {
  background-color: #0a2540;
  border: 3px solid #0a2540;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
}

.offer-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.offer-card.list-view {
  flex-direction: row;
  height: 240px;
}

.offer-card.list-view .offer-image {
  width: 40%;
  height: 100%;
  object-fit: cover;
}

.offer-card.list-view .offer-info {
  padding: 24px;
  flex: 1;
}

.image-wrapper {
  position: relative;
}

.offer-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.offer-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.offer-location {
  display: flex;
  align-items: center;
  color: #d4af37;
  font-size: 0.95rem;
  gap: 0.5rem;
}

.offer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.offer-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
}

.offer-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #d4af37;
}

.offer-details {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: #eee;
  font-size: 0.9rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.offer-actions {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Przycisk „Zobacz szczegóły” */
.details-button {
  padding: 10px 16px;
  background-color: #d4af37;
  color: #0a2540;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #e1bd4e;
}

/* Serduszko z Lucide */
.favorite-button {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.favorite-button:hover {
  transform: scale(1.2);
}

.favorite-button .lucide {
  transition: fill 0.3s ease, transform 0.3s ease;
}

.favorite-button .lucide.active {
  animation: pop-in 0.3s ease;
}

@keyframes pop-in {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  60% {
    transform: scale(1.3);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
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
</style>
