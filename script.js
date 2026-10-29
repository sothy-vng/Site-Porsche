// Ouvre la pop-up
function Connexion() {
    document.getElementById("Connexion").style.display = "flex";
}

// Ferme la pop-up
function fermerConnexion() {
    document.getElementById("Connexion").style.display = "none";
}

// Ferme la pop-up si on clique en dehors de la boîte
window.onclick = function (event) {
    const modal = document.getElementById("Connexion");
    if (event.target === modal) {
        fermerConnexion();
    }
}

// Dictionnaire multilingue pour le site Porsche
const traductions = {
    fr: {
        nav_pays: "Pays",
        nav_compte: "Compte",
        modal_titre: "Connexion",
        modal_desc: "Choisissez votre mode de connexion :",
        modal_google: "Continuer avec Google",
        modal_porsche: "Identifiant Porsche",
        modal_inscription: "S'inscrire",
        titre_presentation: "Présentation",
        desc_presentation: "Porsche est un constructeur automobile allemand spécialisé dans la fabrication de voitures de sport de luxe, de SUV et de berlines.",
        titre_histoire: "Un peu d'histoire",
        hist_commencement: "Le commencement",
        hist_commencement_desc: "La toute première automobile de Porsche est la Lohner-Porsche, un véhicule hybride développé au tout début du XXe siècle par Ferdinand Porsche qui sera suivie de la Porsche Type 64 puis de la Porsche 356.",
        hist_militarisation: "Militarisation",
        hist_911: "1963 : la 911",
        hist_1990: "Années 1990",
        hist_rachat: "Négociation et rachat",
        hist_2010: "Années 2010",
        hist_2020: "Années 2020",
        footer_droits: "© Site Porsche factice - Tous droits réservés"
    },
    en: {
        nav_pays: "Country",
        nav_compte: "Account",
        modal_titre: "Sign in",
        modal_desc: "Choose your sign-in method:",
        modal_google: "Continue with Google",
        modal_porsche: "Porsche ID",
        modal_inscription: "Register",
        titre_presentation: "Overview",
        desc_presentation: "Porsche is a German automobile manufacturer specializing in high-performance luxury sports cars, SUVs, and sedans.",
        titre_histoire: "A Brief History",
        hist_commencement: "The Beginning",
        hist_commencement_desc: "The very first Porsche automobile was the Lohner-Porsche, a hybrid vehicle developed at the dawn of the 20th century by Ferdinand Porsche, followed by the Type 64 and the 356.",
        hist_militarisation: "Militarization",
        hist_911: "1963: The 911",
        hist_1990: "1990s",
        hist_rachat: "Negotiation & Acquisition",
        hist_2010: "2010s",
        hist_2020: "2020s",
        footer_droits: "© Mock Porsche Website - All rights reserved"
    },
    de: {
        nav_pays: "Land",
        nav_compte: "Konto",
        modal_titre: "Anmelden",
        modal_desc: "Wählen Sie Ihre Anmeldemethode:",
        modal_google: "Weiter mit Google",
        modal_porsche: "Porsche ID",
        modal_inscription: "Registrieren",
        titre_presentation: "Überblick",
        desc_presentation: "Porsche ist ein deutscher Automobilhersteller, der sich auf luxuriöse Hochleistungssportwagen, SUVs und Limousinen spezialisiert hat.",
        titre_histoire: "Geschichte",
        hist_commencement: "Der Anfang",
        hist_commencement_desc: "Das allererste Automobil von Porsche war der Lohner-Porsche, ein Hybridfahrzeug, das zu Beginn des 20. Jahrhunderts von Ferdinand Porsche entwickelt wurde.",
        hist_militarisation: "Militarisierung",
        hist_911: "1963: Der 911",
        hist_1990: "1990er Jahre",
        hist_rachat: "Verhandlung & Übernahme",
        hist_2010: "2010er Jahre",
        hist_2020: "2020er Jahre",
        footer_droits: "© Porsche Test-Website - Alle Rechte vorbehalten"
    },
    es: {
        nav_pays: "País",
        nav_compte: "Cuenta",
        modal_titre: "Iniciar sesión",
        modal_desc: "Elija su método de inicio de sesión:",
        modal_google: "Continuar con Google",
        modal_porsche: "Porsche ID",
        modal_inscription: "Registrarse",
        titre_presentation: "Presentación",
        desc_presentation: "Porsche es un fabricante alemán de automóviles especializado en vehículos deportivos de lujo, SUV y berlinas.",
        titre_histoire: "Un poco de historia",
        hist_commencement: "El comienzo",
        hist_commencement_desc: "El primer automóvil de Porsche fue el Lohner-Porsche, un vehículo híbrido desarrollado a principios del siglo XX por Ferdinand Porsche.",
        hist_militarisation: "Militarización",
        hist_911: "1963: el 911",
        hist_1990: "Años 1990",
        hist_rachat: "Negociación y compra",
        hist_2010: "Años 2010",
        hist_2020: "Años 2020",
        footer_droits: "© Sitio web ficticio de Porsche - Todos los derechos reservados"
    }
};

// Fonction appliquant les traductions sur toute la page
function appliquerTraductions() {
    const lang = localStorage.getItem('porsche_selected_lang') || 'fr';
    const pays = localStorage.getItem('porsche_selected_market');
    const savedFlag = localStorage.getItem('porsche_selected_flag');

    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;

    // Mettre à jour le drapeau actuel
    const headerFlag = document.getElementById('header-flag');
    if (headerFlag && savedFlag && savedFlag !== 'globe') {
        headerFlag.src = savedFlag;
    }

    // Mettre à jour les éléments portant l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const cle = el.getAttribute('data-i18n');
        if (traductions[lang] && traductions[lang][cle]) {
            el.textContent = traductions[lang][cle];
        }
    });

    // Afficher le nom du pays sous l'icône globe si sélectionné
    const labelPays = document.getElementById('label-pays');
    if (labelPays && pays) {
        labelPays.textContent = pays;
    }
}

// Appliquer dès que le DOM est prêt
document.addEventListener('DOMContentLoaded', appliquerTraductions);

