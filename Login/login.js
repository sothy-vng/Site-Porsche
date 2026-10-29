// Fonction pour valider le format de l'e-mail
function email_valide(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Attendre le chargement complet du DOM
document.addEventListener('DOMContentLoaded', function () {
    var btnNext = document.getElementById('btn-next');
    var btnBack = document.getElementById('btn-back');
    var emailInput = document.getElementById('email');
    var errorEmail = document.getElementById('error-email');
    var stepEmail = document.getElementById('step-email');
    var stepPassword = document.getElementById('step-password');
    var displayEmail = document.getElementById('display-email');
    var emailSummary = document.getElementById('email-summary');
    var loginForm = document.getElementById('loginForm');

    // Clic sur "Continuer" (Étape 1 : Email)
    btnNext.addEventListener('click', function () {
        var email = emailInput.value.trim();

        if (email_valide(email)) {
            // Cacher l'erreur si elle était affichée
            if (errorEmail) errorEmail.style.display = 'none';

            // Afficher l'email dans l'étape du mot de passe
            if (displayEmail) displayEmail.textContent = email;

            // Masquer la saisie email initiale et afficher le mot de passe
            stepEmail.style.display = 'none';
            stepPassword.style.display = 'block';
            if (emailSummary) emailSummary.style.display = 'block';

            // Mettre le curseur sur le champ mot de passe
            var passwordInput = document.getElementById('password');
            if (passwordInput) passwordInput.focus();
        } else {
            // Afficher le message d'erreur
            if (errorEmail) errorEmail.style.display = 'block';
            emailInput.focus();
        }
    });

    // Permettre de valider avec la touche "Entrée" sur le champ email
    emailInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (stepPassword.style.display === 'block') {
                var passwordInput = document.getElementById('password');
                if (passwordInput) passwordInput.focus();
            } else {
                btnNext.click();
            }
        }
    });

    // Clic sur le stylo pour modifier l'e-mail (LE MOT DE PASSE RESTE AFFICHÉ)
    if (btnBack) {
        btnBack.addEventListener('click', function (e) {
            e.preventDefault();
            // On réaffiche le champ de saisie de l'e-mail
            stepEmail.style.display = 'block';
            // On cache le bouton "Continuer" car le bouton "Se connecter" est déjà présent
            btnNext.style.display = 'none';
            // On masque le texte résumé "Connecté en tant que"
            if (emailSummary) emailSummary.style.display = 'none';
            // Le mot de passe et son champ RESTENT VISIBLES (aucun stepPassword.style.display = 'none')
            emailInput.focus();
        });
    }

    // Soumission finale du formulaire
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            var email = emailInput.value.trim();
            var password = document.getElementById('password').value;

            // Vérifier que l'e-mail est toujours valide (au cas où il a été modifié)
            if (!email_valide(email)) {
                e.preventDefault();
                if (errorEmail) errorEmail.style.display = 'block';
                emailInput.focus();
                return;
            }

            // Vérifier que le mot de passe est renseigné
            if (password.trim() === '') {
                e.preventDefault();
                alert('Veuillez renseigner votre mot de passe.');
                var passwordInput = document.getElementById('password');
                if (passwordInput) passwordInput.focus();
                return;
            }
        });
    }
});
