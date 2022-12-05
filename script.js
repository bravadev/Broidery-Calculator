// Fichier JavaScript

// Récupère les données du formulaire
const form = document.getElementById('form');
const width = form.elements.width.value;
const height = form.elements.height.value;
const motif = form.elements.motif.value;
const prenom = form.elements.prenom.value;
const motifWidth = form.elements.motifWidth.value;
const motifHeight = form.elements.motifHeight.value;
const prenomWidth = form.elements.prenomWidth.value;
const prenomHeight = form.elements.prenomHeight.value;
const spacing = form.elements.spacing.value;

// Calcule les marges possibles
const marginWidth = width - (motifWidth + prenomWidth + spacing);
const marginHeight = height - (motifHeight + prenomHeight + spacing);

// Affiche les résultats
const result = document.getElementById('result');
result.innerHTML = `<p>Marges en largeur : ${marginWidth}</p><p>Marges en hauteur : ${marginHeight}</p>`;
