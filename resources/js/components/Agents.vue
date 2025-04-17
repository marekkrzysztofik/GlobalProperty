<template>
  <section class="agents-section">
    <h2 class="section-title">Poznaj naszych agentów</h2>
    <div class="agents-grid">
      <div class="intro-card">
        <p>
          <strong>Global Property</strong> to zespół blisko 40 osób zaangażowanych w to, by zapewnić sprawną,
          kompleksową i profesjonalną obsługę w zakresie pośrednictwa w obrocie nieruchomościami.
          To trzy współpracujące ze sobą oddziały skupione na różnych częściach Trójmiasta, które dzięki
          wyspecjalizowaniu zawsze dysponują aktualną i szeroką wiedzą na temat określonych lokalizacji.
          To ponad 6 lat doświadczenia na trójmiejskim rynku nieruchomości.
          <br /><br />
          <em>Czujesz, że do nas pasujesz?</em>
        </p>
      </div>

      <div v-for="agent in agents" :key="agent.id" class="agent-card">
        <img :src="agent.photo" :alt="agent.name" class="agent-photo" />
        <div class="agent-content">
          <h3 class="agent-name">{{ agent.name }}</h3>
          <p class="agent-role">{{ agent.role }}</p>
          <p class="agent-contact">
            <i class="pi pi-envelope"></i> {{ agent.email }}
          </p>
          <p class="agent-contact">
            <i class="pi pi-phone"></i> {{ agent.phone }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const agents = [
  {
    id: 1,
    name: 'Anna Kowalska',
    role: 'Ekspert ds. luksusowych nieruchomości',
    email: 'anna@biuro.pl',
    phone: '123 456 789',
    photo: '/images/agent.jpg',
    description:
      'Specjalizuje się w sprzedaży luksusowych apartamentów w Trójmieście. Z sukcesem zamknęła ponad 120 transakcji.',
  },
  {
    id: 2,
    name: 'Marek Nowak',
    role: 'Doradca ds. apartamentów',
    email: 'marek@biuro.pl',
    phone: '987 654 321',
    photo: '/images/agent.jpg',
    description:
      'Zna doskonale rynek nieruchomości w Warszawie. Pasjonat architektury i personalizowanych ofert.',
  },
  {
    id: 3,
    name: 'Julia Wiśniewska',
    role: 'Agent terenowy — Trójmiasto',
    email: 'julia@biuro.pl',
    phone: '456 789 123',
    photo: '/images/agent.jpg',
    description:
      'Obsługuje klientów premium, zapewniając kompleksową opiekę od pierwszego spotkania po finalizację umowy.',
  },
  {
    id: 4,
    name: 'Piotr Zieliński',
    role: 'Specjalista ds. inwestycji',
    email: 'piotr@biuro.pl',
    phone: '111 222 333',
    photo: '/images/agent.jpg',
    description:
      'Pomaga klientom inwestować w nieruchomości o wysokim potencjale zwrotu, zarówno w Trójmieście, jak i za granicą.',
  },
]
</script>

<style scoped>
.agents-section {
  padding: 80px 16px;
  background-color: #0a2540;
  color: #fff;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 48px;
  color: #d4af37;
}

.agents-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
  width: 90%;
  margin: 0 auto;
  justify-items: center;
}

.intro-card {
  background-color: #132e4c;
  padding: 24px 20px;
  border-radius: 18px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  font-size: 0.97rem;
  line-height: 1.7;
  color: #e5e7eb;
  text-align: left;
}

.agent-card {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.agent-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
}

.agent-photo {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: top;
  display: block;
}

.agent-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  color: #f9fafb;
}

.agent-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #facc15;
}

.agent-role {
  color: #e5e7eb;
  font-size: 0.95rem;
}

.agent-contact {
  font-size: 0.9rem;
  color: #f3f4f6;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.agent-contact i {
  color: #d4af37;
}
</style>
