// Récupère les éléments du DOM
const submitZone = document.querySelector('#submit-zone');
const submitPrenom = document.querySelector('#submit-prenom');
const submitMotifRight = document.querySelector('#submit-motif-right');
const submitMotifLeft = document.querySelector('#submit-motif-left');
const widthZone = document.querySelector('#width-zone');
const heightZone = document.querySelector('#height-zone');
const widthPrenom = document.querySelector('#width-prenom');
const heightPrenom = document.querySelector('#height-prenom');
const widthMotifRight = document.querySelector('#width-motif-right');
const heightMotifRight = document.querySelector('#height-motif-right');
const widthMotifLeft = document.querySelector('#width-motif-left');
const heightMotifLeft = document.querySelector('#height-motif-left');
const marginsPrenom = document.querySelector('#margins-prenom');
const zone = document.querySelector('#zone');
const motifRight = document.querySelector('#motif-right');
const marginsMotifRight = document.querySelector('#margins-motif-right');
const motifLeft = document.querySelector('#motif-left');
const marginsMotifLeft = document.querySelector('#margins-motif-left');

// Ajoute un écouteur d'évènement sur le bouton "Valider" du formulaire des dimensions de la zone à broder
submitZone.addEventListener('click', function(e) {
// Empêche le rechargement de la page
    e.preventDefault();

// Récupère les valeurs des champs
    const width = widthZone.value;
    const height = heightZone.value;

// Affiche les dimensions de la zone à broder
    zone.style.width = `${width*5}px`;
    zone.style.height = `${height*5}px`;

});

// Ajoute un écouteur d'évènement sur le bouton "Valider" du formulaire des dimensions du prénom
submitPrenom.addEventListener('click', function(e) {
// Empêche le rechargement de la page
    e.preventDefault();

// Récupère les valeurs des champs
    const width = widthPrenom.value;
    const height = heightPrenom.value;

// Calcul les marges autour du prénom
    const marginTop = (zone.offsetHeight - heightPrenom.value) / 2;
    const marginBottom = marginTop;
    const marginLeft = (zone.offsetWidth - width) / 2;
    const marginRight = marginLeft;

// Affiche les marges autour du prénom
    marginsPrenom.innerHTML = `Marge en haut : ${marginTop/5}<br>Marge en bas : ${marginBottom/5}<br>Marge à gauche : ${marginLeft/5}<br>Marge à droite : ${marginRight/5}`;

// Affiche la zone occupée par le prénom
    const prenom = document.createElement('div');
    prenom.classList.add('prenom');
    prenom.style.width = `${width*5}px`;
    prenom.style.height = `${height*5}px`;
    prenom.style.marginTop = `${marginTop/5}px`;
    prenom.style.marginBottom = `${marginBottom/5}px`;
    prenom.style.marginLeft = `${marginLeft/5}px`;
    prenom.style.marginRight = `${marginRight/5}px`;
    zone.appendChild(prenom);

});

// Ajoute un écouteur d'évènement sur le bouton "Valider" du formulaire des dimensions du motif de droite
submitMotifRight.addEventListener('click', function(e) {
// Empêche le rechargement de la page
    e.preventDefault();

// Récupère les valeurs des champs
    const width = widthMotifRight.value;
    const height = heightMotifRight.value;

// Calcul les marges autour du motif de droite
    const marginTop = (zone.offsetHeight - height) / 2;
    const marginBottom = marginTop;
    const marginRight = zone.offsetWidth - width - prenom.offsetWidth - prenom.offsetLeft;

// Affiche les marges autour du motif de droite
    marginsMotifRight.innerHTML = `Marge en haut : ${marginTop}px<br>Marge en bas : ${marginBottom}px<br>Marge à droite : ${marginRight}px`;

// Affiche le motif de droite
    const motif = document.createElement('div');
    motif.classList.add('motif');
    motif.style.width = `${width*5}px`;
    motif.style.height = `${height*5}px`;
    motif.style.marginTop = `${marginTop}px`;
    motif.style.marginBottom = `${marginBottom}px`;
    motif.style.marginRight = `${marginRight}px`;
    motifRight.appendChild(motif);

});

// Ajoute un écouteur d'évènement sur le bouton "Valider" du formulaire des dimensions du motif de gauche
submitMotifLeft.addEventListener('click', function(e) {
// Empêche le rechargement de la page
    e.preventDefault();

// Récupère les valeurs des champs
    const width = widthMotifLeft.value;
    const height = heightMotifLeft.value;

// Calcul les marges autour du motif de gauche
    const marginTop = (zone.offsetHeight - height) / 2;
    const marginBottom = marginTop;
    const marginLeft = prenom.offsetLeft;

// Affiche les marges autour du motif de gauche
    marginsMotifLeft.innerHTML = `Marge en haut : ${marginTop}px<br>Marge en bas : ${marginBottom}px<br>Marge à gauche : ${marginLeft}px`;

// Affiche le motif de gauche
    const motif = document.createElement('div');
    motif.classList.add('motif');
    motif.style.width = `${width *5}px`;
    motif.style.height = `${height*5}px`;
    motif.style.marginTop = `${marginTop}px`;
    motif.style.marginBottom = `${marginBottom}px`;
    motif.style.marginLeft = `${marginLeft}px`;
    motifLeft.appendChild(motif);

});
