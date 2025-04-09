<template>
    <nav class="navbar">
        <div class="colour-bar"></div>
        <div class="navbar-container">
            <a href="#" class="logo">Global Property</a>
            <div class="nav-links">
                <a class="bold"><i class="pi pi-envelope"></i> globalproperty@global.pl </a>
                <a class="bold"><i class="pi pi-phone"></i> +48 589 521 364 </a>

            </div>
            <!-- Desktop links -->
            <div class="nav-links">
                <a href="#">Oferty</a>
                <a href="#">Usługi</a>
                <a href="#">Zespół</a>
                <a href="#">O nas</a>
                <a href="#">Kontakt</a>

            </div>

            <!-- Hamburger -->
            <div class="hamburger" @click="toggleMobileMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <!-- Mobile menu -->
        <div class="mobile-menu" :class="{ show: isOpen }">
            <a class="bold"><i class="pi pi-envelope"></i> globalproperty@global.pl </a>
            <a class="bold"><i class="pi pi-phone"></i> +48 589 521 364 </a>
            <a href="#">Oferty</a>
            <a href="#">O nas</a>
            <a href="#">Kontakt</a>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMobileMenu = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* RESET */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.navbar {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #1e3a8a;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    z-index: 1000;
}

.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: #1e3a8a;
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 24px;
}

.nav-links a {
    text-decoration: none;
    color: #636769;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #1e3a8a;
    text-decoration: underline;
    text-underline-offset: 10px;
}

.nav-links .bold {
    font-size: 1rem;
    font-weight: 600;
}

.login-button {
    padding: 8px 16px;
    background-color: #1e3a8a;
    color: white;
    border: none;
    border-radius: 20px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.login-button:hover {
    background-color: #1e40af;
}

.hamburger {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
}

.hamburger span {
    display: block;
    width: 24px;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.mobile-menu {
    display: none;
    flex-direction: column;
    padding: 16px 24px;
    background-color: white;
    animation: slideDown 0.3s ease forwards;
}

.mobile-menu a {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    text-decoration: none;
    color: #333;
    font-weight: 500;
}

.mobile-menu a:last-child {
    border-bottom: none;
    margin-top: 12px;
}

.mobile-menu.show {
    display: flex;
}

/* Slide animation */
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hamburger {
        display: flex;
    }
}
</style>