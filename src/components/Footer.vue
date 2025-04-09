<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-column">
                <img src="/images/logo.png" alt="logo" class="logo-image" />
            </div>
            <div class="footer-column">
                <h3>Dane kontaktowe</h3>
                <p>📞 +48 123 456 789</p>
                <p>✉️ kontakt@globalproperty.pl</p>
            </div>

            <div class="footer-column">
                <h3>Adres</h3>
                <p>ul. Nieruchomościowa 12/3</p>
                <p>00-001 Warszawa</p>
                <p>NIP: 123-456-78-90</p>
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
.logo-image {
    width: 250px;

}

.footer {
    height: 350px;
    background-color: #1e3a8a;
    color: white;
    padding: 40px 16px 20px;
    font-size: 0.95rem;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto 24px;
    gap: 40px;
}

.footer-column {
    flex: 1;
    min-width: 250px;
}

.footer-column h3 {
    margin-bottom: 12px;
    font-size: 1.2rem;
    font-weight: 600;
}

.footer-column p {
    margin-bottom: 6px;
}

.footer-bottom {
    text-align: center;
    font-size: 0.85rem;
    color: #ccd3e0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 12px;
}
</style>