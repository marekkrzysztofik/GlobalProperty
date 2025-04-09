<template>
    <section class="how-section">
        <h2 class="section-title">Jak to działa?</h2>
        <div class="steps-grid">
            <div class="step-box" v-for="step in steps" :key="step.id">
                <div class="icon">{{ step.icon }}</div>
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-desc">{{ step.desc }}</p>
            </div>
        </div>

        <div class="form-container">
            <h3 class="form-title">Masz pytania? Napisz do nas</h3>
            <form @submit.prevent="submitForm" class="contact-form">
                <input type="text" v-model="form.name" name="name" placeholder="Twoje imię" required />
                <input type="email" v-model="form.email" name="email" placeholder="Twój e-mail" required />
                <textarea v-model="form.message" name="message" placeholder="Wiadomość..." required></textarea>
                <button type="submit">Wyślij</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const steps = [
    { id: 1, icon: '🏠', title: 'Wybierz nieruchomość', desc: 'Przeglądaj oferty dopasowane do Twoich potrzeb.' },
    { id: 2, icon: '📞', title: 'Skontaktuj się z nami', desc: 'Odpowiemy na każde pytanie i zaplanujemy spotkanie.' },
    { id: 3, icon: '👀', title: 'Oglądaj i negocjuj', desc: 'Umów prezentację, porównaj i złóż ofertę.' },
    { id: 4, icon: '📝', title: 'Finalizacja transakcji', desc: 'Bezpieczna umowa i wsparcie przy notariuszu.' }
]

const form = reactive({
    name: '',
    email: '',
    message: ''
})

async function submitForm() {
    const url = 'https://formsubmit.co/ajax/maras2132@gmail.com'

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(form)
    })

    if (response.ok) {
        alert('Dziękujemy! Wiadomość została wysłana.')
        form.name = ''
        form.email = ''
        form.message = ''
    } else {
        alert('Coś poszło nie tak. Spróbuj ponownie później.')
    }
}
</script>

<style scoped>
.how-section {
    max-width: 1200px;
    margin: 80px auto;
    padding: 0 16px;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 40px;
}

.steps-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    margin-bottom: 60px;
}

.step-box {
    background: white;
    border-radius: 20px;
    padding: 32px 24px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
}

.step-box:hover {
    transform: translateY(-5px);
}

.icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
}

.step-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #1e3a8a;
}

.step-desc {
    font-size: 1rem;
    color: #444;
}

/* FORMULARZ */
.form-container {
    margin-top: 40px;
    text-align: center;
}

.form-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 24px;
    color: #1e3a8a;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 500px;
    margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 12px;
    font-size: 1rem;
    width: 100%;
}

.contact-form textarea {
    resize: vertical;
    min-height: 120px;
}

.contact-form button {
    background-color: #1e3a8a;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact-form button:hover {
    background-color: #1e40af;
}
</style>