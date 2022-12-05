function calculateMargins() {
// récupération des valeurs des champs de formulaire
    const broderieWidth = document.getElementById('broderieWidth').value;
    const broderieHeight = document.getElementById('broderieHeight').value;
    const prenomInput = document.getElementById('prenomInputs');
    const motifInput = document.getElementById('motifInputs');
    let prenomWidth, prenomHeight, motifWidth, motifHeight, espacement;

// vérification de la sélection de l'utilisateur
    if (document.getElementById('prenom').checked) {
        prenomWidth = document.getElementById('prenomWidth').value;
        prenomHeight = document.getElementById('prenomHeight').value;
        prenomInput.style.display = 'block';
        motifInput.style.display = 'none';
    } else if (document.getElementById('motif').checked) {
        prenomWidth = document.getElementById('prenomWidth').value;
        prenomHeight = document.getElementById('prenomHeight').value;
        motifWidth = document.getElementById('motifWidth').value;
        motifHeight= document.getElementById('motifHeight').value;
        espacement = document.getElementById('espacement').value;
        prenomInput.style.display = 'block';
        motifInput.style.display = 'block';
    } else {
        alert('Vous devez choisir une option pour continuer.');
        return;
    }

// calcul des marges
    const prenomTotalWidth = parseInt(prenomWidth) + parseInt(espacement);
    const totalWidth = (document.getElementById('motif').checked) ? parseInt(prenomTotalWidth) + parseInt(motifWidth) : parseInt(prenomWidth);
    const totalHeight = (document.getElementById('motif').checked) ? Math.max(parseInt(prenomHeight), parseInt(motifHeight)) : parseInt(prenomHeight);
    const marginLeft = (broderieWidth - totalWidth) / 2;
    const marginTop = (broderieHeight - totalHeight) / 2;

// affichage des résultats
    const result = document.getElementById('result');
    result.innerHTML = 'Les marges à respecter sont :<br>Marge gauche : ' + marginLeft + '<br>Marge haute : ' + marginTop;
    //result.style.display = 'block';

}
