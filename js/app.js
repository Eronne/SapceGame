
function init() {
  /** INITIALISATION DU JEU **/
}

function update() {
  /** ICI SERONT PLACÉES TOUTES LES PHASES DE CALCUL DE POSITIONS ... ETC **/
}

function render() {
  /** ICI SERONT PLACÉES TOUTES LES PHASES DE DESSIN SUR LE CANVAS **/
}

// Boucle de jeu => tourne indéfiniment à environ 60fps grâce à requestAnimationFrame()
function gameloop() {
  requestAnimationFrame(gameloop);
  update();
  render();
}

// Point d'entrée du jeu : Lancement de la phase d'initialisation
init();
