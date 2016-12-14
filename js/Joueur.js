//Propirété des joueurs
function Joueur(x, y, direction, vitesse) {
    this.x          = x;
    this.y          = y;
    this.direction  = direction;
    this.vitesse    = vitesse;

    this.image      = graphics['img/avion.png'];
    this.width      = this.image.width;
    this.height     = this.image.height;
}

Joueur.prototype.update = function() {
    if (clavier.haut === true){
        //Avancement du joueur
        this.x += Math.cos(this.direction) * this.vitesse;
        this.y += Math.sin(this.direction) * this.vitesse;
    }

    if (clavier.bas === true){
        //Avancement du joueur
        this.x -= Math.cos(this.direction) * this.vitesse;
        this.y -= Math.sin(this.direction) * this.vitesse;
    }

    if (clavier.droite === true){
        this.direction += 0.17;
    }

    if (clavier.gauche === true){
        this.direction -= 0.17;
    }

    //Gestion des débordements hors-écran
    if (this.x > canvas.width) // S'il y a un débordement à droite
        this.x = -this.width;
    if (this.x + this.width < 0) // S'il y a un débordement à gauche
        this.x = canvas.width;
    if (this.y + this.height < 0) // S'il y a un débordement en haut
        this.y = canvas.height;
    if (this.y > canvas.height) // S'il y a un débordement en bas
        this.y = -this.height;
};

Joueur.prototype.render = function() {
    context.save();
    context.translate(this.x + this.width/2, this.y + this.height/2);
    context.rotate(this.direction);
    context.drawImage(this.image, -this.width/2, -this.height/2)
    context.restore();
};
