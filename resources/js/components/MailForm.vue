<template>
    <div class="form-container">
        <h3 class="form-title">Masz pytania? Napisz do nas</h3>
        <form @submit.prevent="submitForm" class="contact-form">
            <input type="text" v-model="form.name" name="name" placeholder="Twoje imię" required />
            <input type="email" v-model="form.email" name="email" placeholder="Twój e-mail" required />
            <textarea v-model="form.message" name="message" placeholder="Wiadomość..." required></textarea>
            <button type="submit">Wyślij</button>
        </form>
    </div>
</template>
<script setup>
import { reactive, defineEmits } from 'vue'

const emit = defineEmits(['close-modal']);
const form = reactive({
    name: '',
    email: '',
    message: ''
})
const closeModal = () => {
    emit("close-modal");
};
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
        closeModal();
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
.form-container {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    width: 500px;
    text-align: center;
}

.form-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 24px;
    color: rgb(10, 37, 64);
}

.contact-form {
    margin: 0 auto;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
}

.contact-form input,
.contact-form textarea {
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 12px;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    width: 100%;
}

.contact-form textarea {
    resize: vertical;
    min-height: 120px;
}

.contact-form button {
    background-color: rgb(10, 37, 64);
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