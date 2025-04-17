<template>
    <section class="seller-section">
      <h1 class="section-title">Dla sprzedających</h1>
      <p class="section-subtitle">
        Skorzystaj z naszej wiedzy i doświadczenia, aby sprzedać swoją nieruchomość szybciej i bezpieczniej.
      </p>
  
      <div class="highlight-box">
        <h2>Dlaczego warto z nami?</h2>
        <ul>
          <li>✔ Profesjonalne przygotowanie oferty (zdjęcia, opisy, home staging)</li>
          <li>✔ Skuteczny marketing i promocja na wielu kanałach</li>
          <li>✔ Bezpieczna obsługa prawna i negocjacje</li>
          <li>✔ Pomoc w dokumentach i formalnościach</li>
        </ul>
      </div>
  
      <div class="steps-section">
        <h2 class="steps-title">Etapy współpracy</h2>
        <div class="steps-grid">
          <div v-for="(step, index) in steps" :key="index" class="step-card">
            <div class="step-number">{{ index + 1 }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const steps = [
    {
      title: 'Bezpłatna konsultacja',
      description: 'Omówimy Twoją sytuację, nieruchomość i wspólnie zaplanujemy strategię sprzedaży.'
    },
    {
      title: 'Przygotowanie oferty',
      description: 'Wykonamy sesję zdjęciową, pomożemy w home stagingu i stworzymy atrakcyjne ogłoszenie.'
    },
    {
      title: 'Promocja',
      description: 'Zadbamy o marketing – portale, social media, banery i inne skuteczne kanały dotarcia.'
    },
    {
      title: 'Prezentacje i negocjacje',
      description: 'Prowadzimy spotkania z klientami i negocjujemy najlepsze warunki w Twoim imieniu.'
    },
    {
      title: 'Finalizacja i formalności',
      description: 'Koordynujemy dokumenty, notariusza i cały proces aż do przekazania nieruchomości.'
    }
  ]
  </script>
  
  <style scoped>
  .seller-section {
    max-width: 1100px;
    margin: 100px auto;
    padding: 0 24px;
    text-align: center;
    color: white;
  }
  
  .section-title {
    font-size: 2.4rem;
    font-weight: 700;
    color: #d4af37;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    color: #ccc;
    margin-bottom: 48px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .highlight-box {
    background: rgba(212, 175, 55, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 64px;
    text-align: left;
    color: #fff;
  }
  
  .highlight-box h2 {
    color: #d4af37;
    font-size: 1.4rem;
    margin-bottom: 16px;
  }
  
  .highlight-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2;
  }
  
  .steps-section {
    text-align: center;
  }
  
  .steps-title {
    font-size: 1.8rem;
    color: #d4af37;
    margin-bottom: 32px;
  }
  
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    text-align: left;
  }
  
  .step-card {
    background: rgba(10, 37, 64, 0.9);
    border-radius: 14px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    position: relative;
    transition: transform 0.3s ease;
  }
  
  .step-card:hover {
    transform: translateY(-6px);
  }
  
  .step-number {
    font-size: 1.4rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 8px;
  }
  
  .step-title {
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 8px;
  }
  
  .step-desc {
    font-size: 0.95rem;
    color: #ddd;
  }
  
  @media (max-width: 600px) {
    .section-title {
      font-size: 1.8rem;
    }
    .steps-title {
      font-size: 1.5rem;
    }
  }
  </style>
  