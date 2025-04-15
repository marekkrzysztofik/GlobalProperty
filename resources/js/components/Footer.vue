<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column logo-column">
            <img src="/public/images/tarcza.png" alt="logo" class="logo-image" />
            
          </div>
          
        <div class="footer-column legal-column">
          <h3>Informacje</h3>
          <ul class="legal-links">
            <li><a href="#">Regulamin</a></li>
            <li><a href="#">Polityka prywatności</a></li>
            <li><a href="#">Polityka cookies</a></li>
            <li><a href="#">RODO</a></li>
          </ul>
        </div>
  
        
        <div class="flex mobile">
            <div class="footer-column address-column m-0-1">
                <h3>Adres</h3>
                <p>ul. Starowiejska 41/43</p>
                <p>81-363 Gdynia</p>
                <p>NIP: 123-456-78-90</p>
                <div class="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                    <i class="pi pi-facebook"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                    <i class="pi pi-instagram"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <i class="pi pi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="footer-column map-column m-0-1">
                <div class="map-social-wrapper">
                  <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1637.547580010434!2d18.530370329392152!3d54.52100072961416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda726810307f9%3A0x1a064daa9330017e!2sStarowiejska%2041%2F43%2C%2081-363%20Gdynia!5e0!3m2!1spl!2spl!4v1744713602109!5m2!1spl!2spl" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 
                </div>
              </div>
        </div>
        
  
       
      </div>
  
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Global Property. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .footer {
    background-color: var(--primary, rgb(10, 37, 64));
    color: white;
    padding: 48px 24px 24px;
    border-top: 3px solid #d4af37;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
  
  .logo-image {
    width:250px;
  }
  .footer-container {
    display: flex;
    justify-content: space-around;
    gap: 48px;
    margin: 0 auto;
  }
  
  .footer-column {
   display:flex;
   flex-direction:column;
   
   justify-content:center;
   
  }
  
  .footer-column h3 {
    margin-bottom: 16px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #d4af37;
  }
  
  .legal-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .legal-links li {
    margin-bottom: 8px;
  }
  
  .legal-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .legal-links a:hover {
    color: #f5d76e;
  }
  
  .address-column p {
    margin-bottom: 6px;
    font-size: 0.95rem;
  }
  
  .map-social-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .map-iframe {
    border: 2px solid #d4af37;
    border-radius: 12px;
  }
  
  .social-icons {
    display: flex;
    gap: 16px;
    justify-content: flex-start;
  }
  
  .social-icons a {
    font-size: 1.6rem;
    color: #d4af37;
    transition: transform 0.2s ease, color 0.3s ease;
  }
  
  .social-icons a:hover {
    transform: scale(1.2);
    color: #f5d76e;
  }
  
  .footer-bottom {
    text-align: center;
    font-size: 0.85rem;
    color: #ccd3e0;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin-top: 40px;
    padding-top: 12px;
  }
  
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .mobile {
        flex-direction:column;
    }
    .social-icons {
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  </style>
  