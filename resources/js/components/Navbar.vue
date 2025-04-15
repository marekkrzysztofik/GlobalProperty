<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="nav-left">
        <div class="nav-item" @click="openModal">
          <a class="link"><i class="pi pi-envelope"></i> contact@globalproperty.pl</a>
        </div>
        <div class="nav-item">
          <a><i class="pi pi-phone"></i> +48 589 521 364</a>
        </div>
      </div>

      <RouterLink to="/">
        <div class="logo-wrapper">
          <img src="/public/images/tarcza.png" alt="logo" class="logo-image" />
        </div>
      </RouterLink>

      <div class="nav-right">
        <div class="nav-links desktop">
          <div class="nav-item">
            <RouterLink to="/oferty">Oferty</RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink to="/uslugi">Usługi</RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink to="/zespol">Zespół</RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink to="/zespol">O nas</RouterLink>
          </div>
          <div class="nav-item"><a href="#">Kontakt</a></div>
        </div>

        <div class="hamburger" :class="{ open: isOpen }" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <Transition name="slide">
      <div v-if="isOpen" class="mobile-menu">
        <a href="#">Oferty</a>
        <a href="#">Usługi</a>
        <a href="#">Zespół</a>
        <a href="#">O nas</a>
        <a href="#">Kontakt</a>
      </div>
    </Transition>
  </nav>

  <Dialog v-model:visible="formVisible" modal :style="{ width: '600px' }">
    <MailForm @close-modal="closeModal" />
  </Dialog>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue'
import MailForm from '@/components/MailForm.vue'

const isOpen = ref(false)
const formVisible = ref(false)

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value
}

function openModal() {
  formVisible.value = true
}
function closeModal() {
  formVisible.value = false
}

// Automatyczne zamykanie menu przy zmianie rozmiaru okna
const handleResize = () => {
  if (window.innerWidth > 768) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>



<style scoped>
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: rgb(10, 37, 64);
  border-bottom: 1px solid var(--secondary);
  box-shadow: 0 2px 6px rgba(212, 175, 55, 0.3);
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  height: 80px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo-wrapper {
  height: 90px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1001;
  background-color: rgb(10, 37, 64);
  padding: 6px 16px;
  border-left: 2px solid var(--secondary);
  border-right: 2px solid var(--secondary);
  border-bottom: 3px solid var(--secondary);
}

.logo-image {
  margin-top: 5px;
  width: 200px;
}

.nav-links.desktop {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-item a {
  color: #d4af37;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-item a:hover {
  color: #f5d76e;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1100;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #d4af37;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  background-color: rgb(10, 37, 64);
  transition: max-height 0.4s ease;
  z-index: 1000;
  position: absolute;
  top: 80px;
  /* wysokość navbaru */
  left: 0;
  right: 0;
  overflow: hidden;
}

.mobile-menu a {
  color: #d4af37;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid #333;
}

.mobile-menu a:hover {
  color: #f5d76e;
}

/* Vue Transition: slide-down/up */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.4s ease, opacity 0.4s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 300px;
  /* maksymalna wysokość menu */
  opacity: 1;
}



/* Responsive */
@media (max-width: 768px) {
  .nav-left {
    display: none;
  }

  .nav-links.desktop {
    display: none;
  }

  .hamburger {
    display: flex;
  }

}
</style>
