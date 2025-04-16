<template>
    <section class="how-section">
        <h2 class="section-title">Dla Ciebie</h2>
        <div class="custom-grid">
            <div class="step-box services-box">
                <div class="icon">
                    <Layers class="icon-svg" />
                </div>
                <h3 class="step-title">Nasze usługi</h3>
                <p class="step-desc">Zobacz, co możemy dla Ciebie zrobić.</p>

                <div class="expanded-content full-height">
                    <div class="service-grid service-tiles">
                        <div v-for="(tile, index) in tiles" :key="index" class="tile service-tile">
                            <component :is="tile.icon" class="service-icon" />
                            <div>{{ tile.label }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Kontakt -->
            <div class="step-box contact-box">
                <div class="icon">
                    <MessageSquare class="icon-svg" />
                </div>
                <h3 class="step-title">Skontaktuj się z nami</h3>
                <p class="step-desc">Zadzwoń lub napisz – odpowiemy szybko!</p>

                <div class="expanded-content">
                    <div class="tile-grid">
                        <div class="tile">
                            <Phone class="tile-icon" />
                            <div>
                                <strong>Gdynia:</strong><br />
                                +48 500 111 222<br />
                                ul. Morska 123
                            </div>
                        </div>
                        <div class="tile">
                            <Phone class="tile-icon" />
                            <div>
                                <strong>Gdańsk:</strong><br />
                                +48 600 333 444<br />
                                ul. Długa 45
                            </div>
                        </div>
                        <div class="tile tile-wide">
                            <Mail class="tile-icon" />
                            <div>
                                <strong>E-mail:</strong><br />
                                <a href="mailto:kontakt@twojafirma.pl">
                                    contact@globalproperty.pl
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Usługi -->

        </div>
    </section>
</template>

<script setup>
import {
    Phone,
    Mail,
    Layers,
    Home,
    Camera,
    Megaphone,
    Handshake,
    Scale,
    CreditCard,
    MessageSquare
} from 'lucide-vue-next'

const tiles = [
    {
        label: 'Home Staging',
        icon: Home,
        description: 'Przygotujemy nieruchomość tak, by zachwycała na zdjęciach i w rzeczywistości.',
        image: '/img/home-staging.jpg'
    },
    {
        label: 'Sesja zdjęciowa',
        icon: Camera,
        description: 'Profesjonalna sesja wnętrz z wykorzystaniem światła naturalnego i lamp.',
        image: '/img/sesja.jpg'
    },
    {
        label: 'Marketing',
        icon: Megaphone,
        description: 'Docieramy do klientów za pomocą wielu kanałów promocji.',
        image: '/img/marketing.jpg'
    },
    {
        label: 'Negocjacje',
        icon: Handshake,
        description: 'Prowadzimy skuteczne negocjacje w Twoim imieniu.',
        image: '/img/negocjacje.jpg'
    },
    {
        label: 'Pomoc prawna',
        icon: Scale,
        description: 'Zadbamy o poprawność prawną transakcji i Twoje bezpieczeństwo.',
        image: '/img/prawo.jpg'
    },
    {
        label: 'Kredyty',
        icon: CreditCard,
        description: 'Współpracujemy z ekspertami kredytowymi, którzy doradzą bezpłatnie.',
        image: '/img/kredyty.jpg'
    }
]
</script>

<style scoped>
.how-section {
    max-width: 1200px;
    margin: 100px auto;
    padding: 0 24px;
    text-align: center;
}

.section-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 48px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Nowy układ: 1/3 i 2/3 */
.custom-grid {
    display: grid;
    grid-template-columns: 1.75fr 1.25fr;
    gap: 32px;
    align-items: stretch;
}



.step-box {
    background: rgba(10, 37, 64, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: 32px 24px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
}

.step-box:hover {
    transform: translateY(-8px) scale(1.015);
    box-shadow: 0 12px 28px rgba(212, 175, 55, 0.25);
}

.icon-svg {
    width: 36px;
    height: 36px;
    stroke: #d4af37;
    margin-bottom: 16px;
}

.step-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #d4af37;
}

.step-desc {
    font-size: 1rem;
    line-height: 1.5;
    color: #eee;
}

.expanded-content {
    margin-top: 20px;
    flex-grow: 1;
}

/* Grid kafelków */
.tile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 16px;
    margin-top: 8px;
}

.service-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-top: 8px;
}

.tile {
    background: rgba(255, 255, 255, 0.07);
    border-radius: 10px;
    padding: 14px;
    text-align: center;
    font-size: 0.95rem;
    color: #fff;
    transition: background 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.tile-icon {
    width: 24px;
    height: 24px;
    stroke: #d4af37;
}

.service-icon {
    width: 44px;
    height: auto;
    stroke: #d4af37;
}

.tile:hover {
    background: rgba(255, 255, 255, 0.13);
}

.tile-wide {
    grid-column: span 2;
}



/* Wysokość 100% w kafelkach usług */
.services-box {
    display: flex;
    flex-direction: column;
}

.service-tiles {
    height: 100%;
}

.service-tile {
    height: 100%;
}

.full-height {
    flex-grow: 1;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: flex-start;
}

@media (max-width: 900px) {
    .custom-grid {
        display: flex;
        flex-direction: column;
    }

    .service-grid {
        grid-template-columns: 1fr 1fr;
    }

    .tile-grid {
        display: flex;
        flex-direction: column;
    }
}
</style>
