<template>
    <section class="filters-section">
        <div class="filters-wrapper">
            <div class="filters-container">
                <Multiselect v-model="filters.type" :options="['Mieszkanie', 'Dom', 'Działka', 'Lokal użytkowy']"
                    placeholder="Typ nieruchomości" class="filter-select" />

                <Multiselect v-model="filters.transaction" :options="['Sprzedaż', 'Wynajem']"
                    placeholder="Typ transakcji" class="filter-select" />

                <Multiselect v-model="filters.location" :options="['Warszawa', 'Kraków', 'Gdańsk', 'Gdynia']"
                    placeholder="Lokalizacja" class="filter-select" />

                <div class="filter-price">
                    <Multiselect v-model="filters.priceFrom" :options="['100 000 zł', '200 000 zł', '300 000 zł']"
                        placeholder="Cena od" class="filter-select" />
                    <Multiselect v-model="filters.priceTo" :options="['100 000 zł', '200 000 zł', '300 000 zł']"
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

<style>
@import '@vueform/multiselect/themes/default.css';

.filters-section {
    display: flex;
    justify-content: center;
    background-color: rgb(10, 37, 64);
    padding: 30px 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border-radius: 0 0 40px 40px;
}

.filters-wrapper {
    width: 100%;
    text-align: center;
}

.filters-title {
    font-size: 1.8rem;
    color: #f5f5f5;
    margin-bottom: 8px;
}

.filters-subtitle {
    font-size: 1rem;
    color: #aaa;
    margin-bottom: 32px;
}

.filters-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    align-items: flex-end;
}

.filter-price {
    display: flex;
    gap: 12px;
}

/* Styl Multiselect */
.multiselect {
    margin: 0;
    width: 240px;
    background-color: rgba(255, 255, 255, 0.08);
    border: 2px solid #d4af37;
    border-radius: 0;
    font-size: 1rem;
    color: white;
}

.multiselect .multiselect-input {
    color: white;
    padding: 10px 14px;
}

.multiselect .multiselect-option {
    background-color: var(--primary);
    color: var(--secondary);
}

.multiselect .multiselect-option.is-selected {
    background-color: var(--primary);
    color: white;
}

.multiselect .multiselect-option.is-pointed {

    color: white;
}

.multiselect .multiselect-clear,
.multiselect .multiselect-caret {
    color: #d4af37;
}

.search-button {
    background-color: #d4af37;
    color: black;
    border: none;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.search-button:hover {
    background-color: #e0c45c;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .filters-section {
        padding-top: 40px;
    }
    .filters-container {
        flex-direction: column;
        align-items: stretch;
    }

    .multiselect {
        width: 100%;
    }
}
</style>