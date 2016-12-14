/**
 * Variables globales de jeu accessible de tous les fichiers JavaScript
 */
var canvas = document.querySelector('#game'); //Récupération de l'élément DOM <canvas>
var context = canvas.getContext('2d'); //Récupération du contexte de dessin ("stylo" permettant d'écrire sur le canvas HTML5)
var graphics; //Contiendra les informations sur les images chargées en phase d'initialisation.
var joueur; //Contiendra le joueur

//initialisation du jeu
function init() {
    chargerImages(['img/avion.png'], function (imagesInfos) {
        //Récupération des images chargées et stockage dans une variable globale appelée : 'graphics'
        graphics = imagesInfos;

        //Adaptation du canvas à la taille de l'écran
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        joueur = new Joueur(canvas.width/2, canvas.height/2, 0, 10); //(x, y, direction, vitesse)

        gameloop(); //Lancement de la game loop
    })
}

//Phases de calcul de positions … etc
function update() {
    joueur.update();
}

//Phases de dessin sur le canvas
function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    joueur.render();
}

// Boucle de jeu => tourne indéfiniment à environ 60fps grâce à requestAnimationFrame()
function gameloop() {
  requestAnimationFrame(gameloop);
  update();
  render();
}

// Point d'entrée du jeu : Lancement de la phase d'initialisation
init();