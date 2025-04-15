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
      <div class="flip-card" v-for="agent in agents" :key="agent.id">
        <div class="flip-card-inner">
          <!-- Front -->
          <div class="flip-card-front">
            <img :src="agent.photo" :alt="agent.name" class="agent-photo" />
            <div class="agent-info">
              <h3>{{ agent.name }}</h3>
              <p class="agent-role">{{ agent.role }}</p>
              <p class="agent-contact">
                <i class="pi pi-envelope"></i> {{ agent.email }}
              </p>
              <p class="agent-contact">
                <i class="pi pi-phone"></i> {{ agent.phone }}
              </p>
            </div>
          </div>
          <!-- Back -->
          <div class="flip-card-back">
            <h3>O {{ agent.name.split(' ')[0] }}</h3>
            <p class="agent-description">{{ agent.description }}</p>
          </div>
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
    id: 3,
    name: 'Julia Wiśniewska',
    role: 'Agent terenowy — Trójmiasto',
    email: 'julia@biuro.pl',
    phone: '456 789 123',
    photo: '/images/agent.jpg',
    description:
      'Obsługuje klientów premium, zapewniając kompleksową opiekę od pierwszego spotkania po finalizację umowy.',
  },
]
</script>

<style scoped>
.intro-card {
  height: 550px;
  background-color: #f9fafb;
  padding: 24px 20px;
  border-radius: 18px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  text-align: left;
  font-size: 0.97rem;
  line-height: 1.7;
  color: #374151;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.agents-section {
  max-width: 90vw;
  margin: 80px auto;
  padding: 0 16px;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: #1e3a8a;
}

.agents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  justify-items: center;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 550px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  backface-visibility: hidden;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.flip-card-front {
  z-index: 2;
}

.flip-card-back {
  transform: rotateY(180deg);
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: left;
}

.agent-photo {
  width: 100%;
  height: 70%;
  object-fit: cover;
  object-position: top;
}

.agent-info {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.agent-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
}

.agent-role {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.agent-contact {
  font-size: 0.9rem;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.agent-description {
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.5;
}
</style>