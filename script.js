class Embroidery {
    constructor() {
        // Récupération des éléments de l'interface utilisateur
        this.widthInput = document.getElementById('width');
        this.heightInput = document.getElementById('height');
        this.nameWidthInput = document.getElementById('name-width');
        this.nameHeightInput = document.getElementById('name-height');
        this.leftMotifWidthInput = document.getElementById('left-motif-width');
        this.leftMotifHeightInput = document.getElementById('left-motif-height');
        this.rightMotifWidthInput = document.getElementById('right-motif-width');
        this.rightMotifHeightInput = document.getElementById('right-motif-height');
        this.calculateMarginsButton = document.getElementById('calculate-margins');
        this.broderieZone = document.getElementById('broderie-zone');
        this.nameElement = document.getElementById('name');
        this.leftMotifElement = document.getElementById('left-motif');
        this.rightMotifElement = document.getElementById('right-motif');

        // Définition des écouteurs d'événements
        this.widthInput.addEventListener('input', this.updateEmbroideryZone.bind(this));
        this.heightInput.addEventListener('input', this.updateEmbroideryZone.bind(this));
        this.nameWidthInput.addEventListener('input', this.updateNameElement.bind(this));
        this.nameHeightInput.addEventListener('input', this.updateNameElement.bind(this));
        this.leftMotifWidthInput.addEventListener('input', this.updateLeftMotifElement.bind(this));
        this.leftMotifHeightInput.addEventListener('input', this.updateLeftMotifElement.bind(this));
        this.rightMotifWidthInput.addEventListener('input', this.updateRightMotifElement.bind(this));
        this.rightMotifHeightInput.addEventListener('input', this.updateRightMotifElement.bind(this));
        this.calculateMarginsButton.addEventListener('click', this.calculateMargins.bind(this));

        // Initialisation de l'application
        this.updateEmbroideryZone();
        this.updateNameElement();
        this.updateLeftMotifElement();
        this.updateRightMotifElement();
    }

    // Méthodes pour mettre à jour les éléments de l'interface utilisateur
    updateEmbroideryZone() {
        // Récupération des dimensions de la zone de broderie
        const width = this.widthInput.value;
        const height = this.heightInput.value;

        // Mise à jour de la zone de broderie
        this.broderieZone.style.width = 10*width + 'px';
        this.broderieZone.style.height = 10*height + 'px';
    }

updateNameElement() {
        // Récupération des dimensions du nom
        const width = this.nameWidthInput.value;
        const height = this.nameHeightInput.value;

        // Mise à jour du nom
        this.nameElement.style.width = 10*width + 'px';
        this.nameElement.style.height = 10*height + 'px';
    }

updateLeftMotifElement() {
        // Récupération des dimensions du motif de gauche
        const width = this.leftMotifWidthInput.value;
        const height = this.leftMotifHeightInput.value;

        // Mise à jour du motif de gauche
        this.leftMotifElement.style.width = 10*width + 'px';
        this.leftMotifElement.style.height = 10*height + 'px';
    }

updateRightMotifElement() {
        // Récupération des dimensions du motif de droite
        const width = this.rightMotifWidthInput.value;
        const height = this.rightMotifHeightInput.value;

        // Mise à jour du motif de droite
        this.rightMotifElement.style.width = 10*width + 'px';
        this.rightMotifElement.style.height = 10*height + 'px';
    }

calculateMargins() {
    // Calcul des marges du prénom
    const nameWidth = parseInt(this.nameWidthInput.value);
    const nameHeight = parseInt(this.nameHeightInput.value);
    const embroideryWidth = parseInt(this.widthInput.value);
    const embroideryHeight = parseInt(this.heightInput.value);
    const nameMarginTop = (embroideryHeight - nameHeight) / 2;
    const nameMarginLeft = (embroideryWidth - nameWidth) / 2;
    // Appliquer les marges calculées à l'affichage du prénom
    const nameElement = document.getElementById('name');
    nameElement.style.marginTop = `${nameMarginTop}px`;
    nameElement.style.marginLeft = `${nameMarginLeft}px`;
    totalMarginsElement.innerHTML = `Les marges totales sont : ${totalMargins}`;
    // Mise à jour de l'affichage des marges du prénom
    //this.nameElement.style.marginTop = nameMarginTop + 'px';
    //this.nameElement.style.marginLeft = nameMarginLeft + 'px';
    const totalMotifWidth = this.leftMotifWidth + this.rightMotifWidth;
    const remainingWidth = this.width - this.nameWidth - totalMotifWidth;
    const motifMarginLeft = remainingWidth / 2;

    // Appliquer les marges calculées à l'affichage des motifs
    const leftMotifElement = document.getElementById('left-motif');
    leftMotifElement.style.marginLeft = `${motifMarginLeft}px`;

    const rightMotifElement = document.getElementById('right-motif');
    rightMotifElement.style.marginLeft = `${motifMarginLeft}px`;

    // Calculer les marges totales
    const totalMargins = nameMarginTop + nameMarginLeft + motifMarginLeft * 2;

    // Afficher les marges totales
    const totalMarginsElement = document.getElementById('total-margins');
    totalMarginsElement.innerHTML = `Les marges totales sont : ${totalMargins}`;
}



}
// Instanciation de la classe Embroidery
const embroidery = new Embroidery();
