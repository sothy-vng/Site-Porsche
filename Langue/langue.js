document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('market-search');
    const regionSections = document.querySelectorAll('.region-section');
    const regionToggles = document.querySelectorAll('.region-toggle');
    const countryCards = document.querySelectorAll('.country-card');

    // 1. Gestion des accordéons (ouvrir / fermer les régions)
    regionToggles.forEach(button => {
        button.addEventListener('click', function () {
            const section = this.closest('.region-section');
            section.classList.toggle('open');
        });
    });

    // 2. Recherche en direct des pays / régions
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase().trim();

            regionSections.forEach(section => {
                const cards = section.querySelectorAll('.country-card');
                let matchCount = 0;

                cards.forEach(card => {
                    const countryData = (card.getAttribute('data-country') || '').toLowerCase();
                    const countryText = card.textContent.toLowerCase();

                    if (query === '' || countryData.includes(query) || countryText.includes(query)) {
                        card.style.display = 'flex';
                        matchCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (query !== '') {
                    if (matchCount > 0) {
                        section.style.display = 'block';
                        section.classList.add('open'); // Ouvre automatiquement la région qui a des résultats
                    } else {
                        section.style.display = 'none';
                    }
                } else {
                    section.style.display = 'block';
                }
            });
        });
    }

    // 3. Afficher le pays et le drapeau actuel si déjà sauvegardé
    const savedMarket = localStorage.getItem('porsche_selected_market');
    const savedFlag = localStorage.getItem('porsche_selected_flag');
    const currentMarketEl = document.getElementById('current-market');
    const currentFlagEl = document.getElementById('current-market-flag');

    if (savedMarket && currentMarketEl) {
        currentMarketEl.textContent = savedMarket;
    }
    if (savedFlag && savedFlag !== 'globe' && currentFlagEl) {
        currentFlagEl.src = savedFlag;
    }

    // 4. Sauvegarder le choix (pays + langue + drapeau) et rediriger vers l'accueil
    countryCards.forEach(card => {
        card.addEventListener('click', function (e) {
            const countryName = this.querySelector('.country-name')?.textContent.trim() || 'France';
            const langText = (this.querySelector('.country-lang')?.textContent || '').toLowerCase().trim();
            const flagImg = this.querySelector('.flag-icon');
            const flagSrc = flagImg ? flagImg.src : 'globe';

            // Déduction du code langue
            let langCode = 'fr';
            if (langText.includes('Հայերեն')) {
                langCode = 'am';
            } else if (langText.includes('english')) {
                langCode = 'en';
            } else if (langText.includes('deutsch')) {
                langCode = 'de';
            } else if (langText.includes('español')) {
                langCode = 'es';
            } else if (langText.includes('italiano')) {
                langCode = 'it';
            } else if (langText.includes('français')) {
                langCode = 'fr';
            } else if (langText.includes('português')) {
                langCode = 'pt';
            } else if (langText.includes('nederlands')) {
                langCode = 'nl';
            } else if (langText.includes('svenska')) {
                langCode = 'sv';
            } else if (langText.includes('norsk')) {
                langCode = 'no';
            } else if (langText.includes('suomi')) {
                langCode = 'fi';
            } else if (langText.includes(' dansk')) {
                langCode = 'dk';
            } else if (langText.includes('nederlands')) {
                langCode = 'nl';
            } else if (langText.includes('русский')) {
                langCode = 'ru';
            } else if (langText.includes('中文')) {
                langCode = 'zh';
            } else if (langText.includes('한국어')) {
                langCode = 'ko';
            } else if (langText.includes('日本語')) {
                langCode = 'ja';
            } else if (langText.includes('polski')) {
                langCode = 'pl';
            } else if (langText.includes('Türkçe')) {
                langCode = 'tr';
            } else if (langText.includes('čeština')) {
                langCode = 'cs';
            } else if (langText.includes('magyar')) {
                langCode = 'hu';
            } else {
                // Par défaut pour les autres langues
                langCode = 'en';
            }

            localStorage.setItem('porsche_selected_market', countryName);
            localStorage.setItem('porsche_selected_lang', langCode);
            localStorage.setItem('porsche_selected_flag', flagSrc);
        });
    });
});
