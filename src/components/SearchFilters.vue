<template>
    <section class="filters-section">
        <div class="filters-container">
            <select v-model="filters.type" class="filter-select">
                <option disabled value="">Typ nieruchomości</option>
                <option>Mieszkanie</option>
                <option>Dom</option>
                <option>Działka</option>
                <option>Lokal użytkowy</option>
            </select>

            <select v-model="filters.transaction" class="filter-select">
                <option disabled value="">Typ transakcji</option>
                <option>Sprzedaż</option>
                <option>Wynajem</option>
            </select>

            <select v-model="filters.location" class="filter-select">
                <option disabled value="">Lokalizacja</option>
                <option>Warszawa</option>
                <option>Kraków</option>
                <option>Gdańsk</option>
                <option>Gdynia</option>
            </select>

            <div class="filter-price">
                <select v-model="filters.priceFrom" class="filter-select">
                    <option disabled value="">Cena od</option>
                    <option>100 000 zł</option>
                    <option>200 000 zł</option>
                    <option>300 000 zł</option>
                </select>
                <select v-model="filters.priceTo" class="filter-select">
                    <option disabled value="">Cena do</option>
                    <option>100 000 zł</option>
                    <option>200 000 zł</option>
                    <option>300 000 zł</option>
                </select>
            </div>

            <button class="search-button" @click="handleSearch">
                🔍
            </button>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const filters = reactive({
    type: '',
    transaction: '',
    location: '',
    priceFrom: '',
    priceTo: ''
})

function handleSearch() {
    console.log('Wyszukiwanie z filtrami:', filters)
    // Możesz tutaj przekazać filtry do rodzica / zapytać API
}
</script>

<style scoped>
.filters-section {
    display: flex;
    justify-content: center;
    margin-top: -20px;
    padding: 24px 16px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    border-radius: 0 0 40px 40px;
}

.filters-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 1200px;
    width: 100%;
    align-items: center;
}

.filter-select {
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 12px;
    font-size: 1rem;
    min-width: 180px;
}

.filter-price {
    display: flex;
    align-items: center;
    gap: 8px;
}

.filter-price input {
    width: 100px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 12px;
    font-size: 1rem;
}

.search-button {
    background-color: #1e3a8a;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.search-button:hover {
    background-color: #1e40af;
}

@media (max-width: 768px) {
    .filters-container {
        flex-direction: column;
        align-items: stretch;
    }

    .search-button {
        align-self: flex-end;
    }
}
</style>