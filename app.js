// Récupération du formulaire
var form = document.querySelector("form");
// Récupération des éléments du formulaire
var broderieWidthInput = document.querySelector("#broderieWidth");
var broderieHeightInput = document.querySelector("#broderieHeight");
var motifOrPrenomSelect = document.querySelector("#motifOrPrenom");
var motifInput = document.querySelector("#motif");
var motifWidthInput = document.querySelector("#motifWidth");
var motifHeightInput = document.querySelector("#motifHeight");
var prenomInput = document.querySelector("#prenom");
var prenomWidthInput = document.querySelector("#prenomWidth");
var prenomHeightInput = document.querySelector("#prenomHeight");
var spacingInput = document.querySelector("#spacing");

// Fonction pour calculer les marges en largeur et en hauteur
function calculateMargins(broderieWidth, broderieHeight, motifWidth, motifHeight, prenomWidth, prenomHeight, spacing) {
    // Calcul des marges en largeur
    var broderieWidthMargin = broderieWidth - (motifWidth * spacing) - prenomWidth;
    // Calcul des marges en hauteur
    var broderieHeightMargin = broderieHeight - (motifHeight * spacing) - prenomHeight;
    // Affichage des marges en largeur et en hauteur
    alert("Marges en largeur: " + broderieWidthMargin + "\nMarges en hauteur: " + broderieHeightMargin);
}

// Écouteur d'événement pour capturer la soumission du formulaire
form.addEventListener("submit", function (e) {
    // Empêcher l'envoi du formulaire
    e.preventDefault();

    // Récupération des valeurs des inputs
    var broderieWidth = broderieWidthInput.value;
    var broderieHeight = broderieHeightInput.value;
    var motifOrPrenom = motifOrPrenomSelect.value;
    var motif = motifInput.value;
    var motifWidth = motifWidthInput.value;
    var motifHeight = motifHeightInput.value;
    var prenom = prenomInput.value;
    var prenomWidth = prenomWidthInput.value;
    var prenomHeight = prenomHeightInput.value;
    var spacing = spacingInput.value;

    // Si l'utilisateur a choisi de broder un motif seul
    if (motifOrPrenom == "motif") {
        // Calcul des marges en largeur et en hauteur
        calculateMargins(broderieWidth, broderieHeight, motifWidth, motifHeight, 0, 0, spacing);
    }
    // Si l'utilisateur a choisi de broder un prénom et un motif
    else if (motifOrPrenom == "prenom") {
        // Calcul des marges en largeur et en hauteur
        calculateMargins(broderieWidth, broderieHeight, motifWidth, motifHeight, prenomWidth, prenomHeight, spacing);
    }
    // Si l'utilisateur n'a pas choisi de broder un motif seul ou un prénom et un motif
    else {
        alert("Vous devez choisir de broder un motif seul ou un prénom et un motif!");
    }
});

// Écouteur d'événement pour afficher/cacher les inputs liés au prénom en fonction du choix de l'utilisateur
motifOrPrenomSelect.addEventListener("change", function () {
    // Si l'utilisateur a choisi de broder un motif seul
    if (this.value == "motif") {
        // Masquer les inputs liés au prénom
        prenomInput.style.display = "none";
        prenomWidthInput.style.display = "none";
        prenomHeightInput.style.display = "none";
    }
    // Si l'utilisateur a choisi de broder un prénom et un motif
    else if (this.value == "prenom") {
        // Afficher les inputs liés au prénom
        prenomInput.style.display = "block";
        prenomWidthInput.style.display = "block";
        prenomHeightInput.style.display = "block";
    }
});
