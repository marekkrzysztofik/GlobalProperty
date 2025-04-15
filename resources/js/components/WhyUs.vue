<template>
    <div class="text-center">
        <h2 class="section-title">Dlaczego my?</h2>
    </div>
    <section class="why-section" data-scroll-reveal>
        <div class="center-div">
            <div class="why-grid">
                <div class="why-box" v-for="item in stats" :key="item.id">
                    <div class="number">{{ item.visible ? item.current : 0 }}+</div>
                    <p class="label">{{ item.label }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
 
<script setup>
import { onMounted, reactive } from 'vue'

const stats = reactive([
    { id: 1, label: 'Lat doświadczenia', value: 10, current: 0, visible: false },
    { id: 2, label: 'Sprzedanych nieruchomości', value: 350, current: 0, visible: false },
    { id: 3, label: 'Zadowolonych klientów', value: 280, current: 0, visible: false },
    { id: 4, label: 'Lokalizacji w Polsce', value: 12, current: 0, visible: false }
])

function animateNumber(stat) {
    const step = Math.ceil(stat.value / 50)
    const interval = setInterval(() => {
        stat.current += step
        if (stat.current >= stat.value) {
            stat.current = stat.value
            clearInterval(interval)
        }
    }, 20)
}

onMounted(() => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = entry.target.getAttribute('data-index')
                const stat = stats[index]
                if (!stat.visible) {
                    stat.visible = true
                    animateNumber(stat)
                }
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.3 })

    const boxes = document.querySelectorAll('.why-box')
    boxes.forEach((box, index) => {
        box.setAttribute('data-index', index)
        observer.observe(box)
    })
})
</script>

<style scoped>
.why-section {
    width: 100%;
    height: 400px;
    position: relative;
    justify-content: center;
    background-color: rgb(10, 37, 64);
    margin: 0 0 100px;
    padding: 0 16px;
    text-align: center;
    border-radius: 40px;
}

.section-title {
    font-size: 2rem;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 40px;
}

.center-div {
    width: 85%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
  left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.why-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.why-box {
    background: white;
    border-radius: 20px;
    padding: 40px 24px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
}

.why-box:hover {

    transform: translateY(-1.5rem) scale(1.03);
}

.number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 12px;
}

.label {
    font-size: 1.1rem;
    color: #333;
}
</style>