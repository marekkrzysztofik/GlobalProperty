<template>
    <section class="hero-section">
        <div class="hero-container">
            <img src="/images/img1.jpg" alt="Luksusowa nieruchomość" class="hero-image" />
            <div class="hero-text animate">
                <p>Twoje idealne miejsce zaczyna się tutaj</p>
                <a href="#oferty" class="cta-button">Zobacz oferty</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    display: flex;
    justify-content: center;
    padding: 40px 16px;
}

.hero-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    height: 450px;
    border-radius: 40px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}

.hero-text {
    position: absolute;
    bottom: 24px;
    right: 32px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 16px 24px;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    gap: 12px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: 0.4s;
}

.hero-text p {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
}

.cta-button {
    background-color: #1e3a8a;
    color: white;
    padding: 10px 18px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    text-align: center;
}

.cta-button:hover {
    background-color: #1e40af;
}

/* Animacja wejścia */
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>