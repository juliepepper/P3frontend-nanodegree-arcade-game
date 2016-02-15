// Enemies our player must avoid
'strict mode'
var CANVAS_WIDTH;
var CANVAS_HEIGHT;
var LEVEL_UP_DELAY = 1000;
var LEVEL_UP_MESSAGE = 'Ladykiller: Winner!';
var LEVEl_UP;
var gameStatus;
var key = allowedKeys;
var allowedKeys;

var successAudio = new Audio('sounds/success2.wav');
//var successAudio = new Audio('sounds/levelwin.wav');
var crashAudio = new Audio('sounds/crash.wav');


var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    enemySpeeds = [200];
    this.speed = enemySpeeds[(Math.floor(Math.random() * enemySpeeds.length))] - 100;
    this.sprite = 'images/enemy-bug.png';
};



//Manage level up dialogue

var gameStatus = function() {
    this.level = 1;
    this.levelup = false;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //invoking the checkCollision
    //this.checkCollisions(player);
    this.x += this.speed*dt;
    if (this.x > 505) {
        this.x = 0;
    }
        //if the player is in row 1
   if (player.y === 68) {
        console.log('Im in the row');
        //check for collision for player and any enemy
       if (((player.x - this.x ) > -20) && ((player.x - this.x) < 80)) {
           console.log("player" + player.x + "enemy" + this.x);
           //make a crash sound
           crashAudio.play();
           //reposition player
           player.reset();
       }

    }
    // if player is in row 2
   if (player.y === 151) {
       //check for collision with player and any enemy
       if (((player.x - this.x ) > -20) && ((player.x - this.x) < 80)) {
           console.log("player" + player.x + "enemy" + this.x);
           //make a crash sound
           crashAudio.play();
           //repostion player
           player.reset();
       }

   }
     //if player is in row 3
     if (player.y === 234) {
       //check for collision with player and any enemy
       if (((player.x - this.x ) > -20) && ((player.x - this.x) < 80)) {
           console.log("player" + player.x + "enemy" + this.x);
           //make a crash sound
           crashAudio.play();
           //reposition player
           player.reset();
       }

   }
    return this;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Enemies our player must avoid
var Player = function(x,y) {

    this.x = x;
    this.y = y;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function(dt) {
    if (player.y === -15) {
        //if player reaches the water, play a tune
        successAudio.play();
        //reposition player
        player.reset();

    }

};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;

};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){
    if (key == 'up') {
        //move this.y : subtract this value by 83
        //this means the player is not in the first row
        if (this.y !== -15)
            this.y = this.y - 83;
        //console.log(this.y);
    }

    if (key == 'down') {
        //move this.y : add this value by 83
        //this means the player is not in the last row
        if (this.y !== 404)
            this.y = this.y + 83;

    }
    if (key == 'left') {
        //move this.x to the left : subtract this value by 101
        //this means the player is not in the first column
        if (this.x !== -2)
            this.x = this.x - 101;

    }
    if (key == 'right'){
        //move this.x to the right : add this value by 101
        //this means the player is not in the last column
        if (this.x !== 404)
            this.x = this.x + 101;
    }
};



// Now instantiate your objects.
var enemy1 = new Enemy(250,65);
var enemy2 = new Enemy(-10,160);
var enemy3 = new Enemy(300,140);
var enemy4 = new Enemy(110,140);
var enemy5 = new Enemy(100,210);
var enemy6 = new Enemy(300,240);
//var startingEnemies = [enemy1, enemy2, enemy3];
//var LEVEL_UP_ENEMIES = [enemy4, enemy5, enemy6];
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];



// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(200,400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
