// Récupération des éléments du formulaire
const form = document.getElementById('broderie-form');
const zoneWidthInput = document.getElementById('zone-width');
const zoneHeightInput = document.getElementById('zone-height');
const motifWidthInput = document.getElementById('motif-width');
const motifHeightInput = document.getElementById('motif-height');

// Récupération des éléments pour afficher les résultats
const resultsElement = document.getElementById('results');
const marginWidthElement = document.getElementById('margin-width');
const marginHeightElement = document.getElementById('margin-height');

// Fonction pour calculer les marges
function calculateMargins() {
    // Récupération des valeurs des champs de formulaire
    const zoneWidth = zoneWidthInput.value;
    const zoneHeight = zoneHeightInput.value;
    const motifWidth = motifWidthInput.value;
    const motifHeight = motifHeightInput.value;

    // Calcul des marges
    const marginWidth = (zoneWidth - motifWidth) / 2;
    const marginHeight = (zoneHeight - motifHeight) / 2;

    // Affichage des résultats
    resultsElement.style.display = 'block';
    marginWidthElement.innerHTML = marginWidth;
    marginHeightElement.innerHTML = marginHeight;
}

// Gestionnaire d'événements pour la soumission du formulaire
form.addEventListener('submit', (event) => {
    // Empêche la page de se rafraîchir
    event.preventDefault();

    // Calcule et affiche les marges
    calculateMargins();
});
