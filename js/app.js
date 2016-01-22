// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    enemySpeeds = [200, 300, 400, 500];
    this.speed = enemySpeeds[(Math.floor(Math.random() * enemySpeeds.length))] - 100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    if (this.x > 505) {
        this.x = 0;
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
    //if the player is in row 1
    if (this.y === 73) {
        //check for collision for enemy1 and enemy2
       if (Math.round(enemy1.x) + 101 == this.x) {
           this.reset();
       }
       if (Math.round(enemy2.x) + 101 == this.x){
           this.reset();
       }
    }
    // if player is in row 2
    if (this.y === 156) {
       //check for collision with enemy 3 and 4
       if (Math.round(enemy3.x) + 101 == this.x) {
            this.reset();
       }
       if (Math.round(enemy4.x) + 101 == this.x) {
            this.reset();
       }
    }
     // if player is in row 3
     if (this.y === 238) {
       //check for collision with enemy 5 and 6
       if (Math.round(enemy5.x) + 101 == this.x) {
            this.reset();
       }
       if (Math.round(enemy6.x) + 101 == this.x) {
            this.reset();
       }
   }
};

Player.prototype.reset = function() {
    this.x = 202;
    this.y = 404;
}

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){
    if (key == 'up') {
        //move this.y : subtract this value by 83
        //this means the player is not in the first row
        if (this.y !== -10)
            this.y = this.y - 83;
    }
    if (key == 'down') {
        //move this.y : add this value by 101
        //this means the player is not in the last row
        if (this.y !== 405)
            this.y = this.y + 83;

    }
    if (key == 'left') {
        //move this.x to the left : subtract this value by 101
        //this means the player is not in the first column
        if (this.x !== 0)
            this.x = this.x - 101;

    }
    if (key == 'right'){
        //move this.x to the right : add this value by 101
        //this means the player is not in the last column
        if (this.x !== 404)
            this.x = this.x + 101;
    }
    console.log("this.x is " + this.x);
    console.log("this.y is " + this.y);
};

// Now instantiate your objects.
var enemy1 = new Enemy(100,65);
var enemy2 = new Enemy(-20,65);
var enemy3 = new Enemy(300,140);
var enemy4 = new Enemy(100,140);
var enemy5 = new Enemy(100,210);
var enemy6 = new Enemy(300,210);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(202,405);



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
