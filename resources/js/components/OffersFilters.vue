<template>
    <section class="filters-section">
      <div class="filters-wrapper">
        <h2 class="filters-title">Znajdź idealną nieruchomość</h2>
        <p class="filters-subtitle">Skorzystaj z filtrów, aby zawęzić wyniki do swoich preferencji</p>
  
        <div class="filters-container">
          <Multiselect v-model="filters.type" :options="['Mieszkanie', 'Dom', 'Działka', 'Lokal użytkowy']"
            placeholder="Typ nieruchomości" class="filter-select" />
  
          <Multiselect v-model="filters.transaction" :options="['Sprzedaż', 'Wynajem']"
            placeholder="Typ transakcji" class="filter-select" />
  
          <Multiselect v-model="filters.location" :options="['Warszawa', 'Kraków', 'Gdańsk', 'Gdynia']"
            placeholder="Lokalizacja" class="filter-select" />
  
          <div class="filter-price">
            <Multiselect v-model="filters.priceFrom" :options="['100 000 zł', '300 000 zł', '500 000 zł', '1 000 000 zł']"
              placeholder="Cena od" class="filter-select" />
            <Multiselect v-model="filters.priceTo" :options="['300 000 zł', '500 000 zł', '1 000 000 zł', '5 000 000 zł']"
              placeholder="Cena do" class="filter-select" />
          </div>
  
          <button class="search-button" @click="handleSearch">
            <i class="pi pi-search"></i> Szukaj
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import Multiselect from '@vueform/multiselect'
  import '@vueform/multiselect/themes/default.css'
  import { reactive } from 'vue'
  
  const filters = reactive({
    type: '',
    transaction: '',
    location: '',
    priceFrom: '',
    priceTo: ''
  })
  
  function handleSearch() {
    console.log('Filtry:', filters)
  }
  </script>
  
  <style scoped>
  @import '@vueform/multiselect/themes/default.css';
  
  .filters-section {
    background-color: #0a2540;
    padding: 64px 24px 80px;
    border-radius: 0 0 48px 48px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;
  }
  
  .filters-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .filters-title {
    font-size: 2.4rem;
    color: #d4af37;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .filters-subtitle {
    font-size: 1.1rem;
    color: #ccc;
    margin-bottom: 36px;
  }
  
  .filters-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: flex-end;
  }
  
  .filter-price {
    display: flex;
    gap: 12px;
  }
  
  /* Multiselect Styling */
  .multiselect {
    width: 260px;
    background-color: rgba(255, 255, 255, 0.08);
    border: 2px solid #d4af37;
    border-radius: 12px;
    font-size: 1rem;
    color: white;
  }
  
  .multiselect .multiselect-input {
    color: white;
    padding: 12px 16px;
  }
  
  .multiselect .multiselect-clear,
  .multiselect .multiselect-caret {
    color: #d4af37;
  }
  
  .search-button {
    background-color: #d4af37;
    color: black;
    border: none;
    padding: 14px 28px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .search-button:hover {
    background-color: #e0c45c;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    .filters-container {
      flex-direction: column;
      align-items: stretch;
    }
  
    .multiselect {
      width: 100%;
    }
  
    .filter-price {
      flex-direction: column;
    }
  }
  </style>
  