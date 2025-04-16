<template>
    <section class="career-section">
      <div class="gold-bar"></div>
      <div class="career-content">
        <h2 class="section-title">Kariera</h2>
        <p class="section-intro">
          Szukamy ludzi z pasją i energią. Dołącz do nas i twórz przyszłość rynku nieruchomości.
        </p>
        <div class="tile-grid">
          <div class="tile">
            <Handshake class="tile-icon" />
            <div>Przyjazna atmosfera</div>
          </div>
          <div class="tile">
            <GraduationCap class="tile-icon" />
            <div>Możliwości rozwoju</div>
          </div>
          <div class="tile">
            <Clock class="tile-icon" />
            <div>Elastyczny czas pracy</div>
          </div>
          <div class="tile tile-wide">
            <Mail class="tile-icon" />
            <div>
              <strong>Wyślij CV:</strong><br />
              <a href="mailto:kariera@globalproperty.pl">kariera@globalproperty.pl</a>
            </div>
          </div>
        </div>
        <a href="/kariera" class="career-button">Zobacz oferty pracy</a>
  
        
      </div>
    </section>
  </template>
  
  <script setup>
  import {
    Handshake,
    GraduationCap,
    Clock,
    Mail
  } from 'lucide-vue-next'
  </script>
  
  <style scoped>
  .career-section {
    position: relative;
    overflow: hidden;
    background: linear-gradient(145deg, #0a1a2f, #1e2e47);
    padding: 100px 24px;
    color: white;
    display: flex;
    justify-content: center;
  }
  
  .gold-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: #d4af37;
    border-radius: 3px;
  }
  
  .career-content {
    max-width: 1000px;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  
  .section-title {
    font-size: 2.4rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .section-intro {
    font-size: 1.1rem;
    color: #eee;
    max-width: 700px;
    margin: 0 auto 40px;
    line-height: 1.6;
  }
  
  .tile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
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
  
  .tile:hover {
    background: rgba(255, 255, 255, 0.13);
  }
  
  .tile-icon {
    width: 24px;
    height: 24px;
    stroke: #d4af37;
  }
  
  .tile-wide {
    grid-column: span 2;
  }
  
  @media (max-width: 600px) {
    .tile-wide {
      grid-column: span 1;
    }
  }
  
  .career-button {
    display: inline-block;
    background-color: #d4af37;
    color: #0a1a2f;
    padding: 14px 32px;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-bottom: 40px;
  }
  
  .career-button:hover {
    background-color: #e1bc5a;
    transform: translateY(-2px);
  }
  
  /* Cytat */
  .quote-box {
    background: rgba(212, 175, 55, 0.1);
    border-left: 4px solid #d4af37;
    padding: 20px 24px;
    max-width: 700px;
    margin: 0 auto;
    font-style: italic;
    font-size: 1rem;
    color: #f4f4f4;
    border-radius: 10px;
  }
  
  .quote-author {
    display: block;
    font-size: 0.9rem;
    color: #d4af37;
    margin-top: 8px;
  }
  </style>
  