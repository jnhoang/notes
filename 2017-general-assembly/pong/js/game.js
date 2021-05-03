// The game properties object that currently only contains the screen dimensions
var gameProperties = {
    screenWidth: 640,
    screenHeight: 480,
    
    dashSize: 5,
    
    paddleLeft_x: 50,
    paddleRight_x: 590,
    paddleVelocity: 600,
    
    ballVelocity: 500,
    ballStartDelay: 2,
    ballRandomStartingAngleLeft: [-120, 120],
    ballRandomStartingAngleRight: [-60, 60],
};

var graphicAssets = {
    ballURL: 'assets/ball.png',
    ballName: 'ball',

    paddleURL: 'assets/paddle.png',
    paddleName: 'paddle',
};

var soundAssets = {
    ballBounceURL: 'assets/ballBounce',
    ballBounceName: 'ballBounce',

    ballHitURL: 'assets/ballHit',
    ballHitName: 'ballHit',

    ballMissedURL: 'assets/ballMissed',
    ballMissedName: 'ballMissed',

    mp4URL: '.m4a',
    oggURL: '.ogg'
}
// The main state that contains our game. Think of states like pages or screens such as the splash screen, main menu, game screen, high scores, inventory, etc.
var mainState = function(game){
    this.backgroundGraphics;
    this.ballSprite;
    this.paddleLeftSprite;
    this.paddleRightSprite;
    this.paddleGroup;

    this.paddleLeft_up;
    this.paddleLeft_down;
    this.paddleRight_up;
    this.paddleRight_down;
};
mainState.prototype = {

    // The preload function is use to load assets into the game
    preload: function () {
        game.load.image(graphicAssets.ballName, graphicAssets.ballURL);
        game.load.image(graphicAssets.paddleName, graphicAssets.paddleURL);

        game.load.audio(soundAssets.ballBounceName, 
            [soundAssets.ballBounceURL + soundAssets.mp4URL, soundAssets.ballBounceURL + soundAssets.oggURL]);
        game.load.audio(soundAssets.ballHitName,
            [soundAssets.ballHitURL + soundAssets.mp4URL, soundAssets.ballHitURL + soundAssets.oggURL]);
        game.load.audio(soundAssets.ballMisedName,
            [soundAssets.ballMissedURL + soundAssets.mp4URL, soundAssets.ballMissedURL + soundAssets.oggURL]);
    },

    // The create function is called after all assets are loaded and ready for use. This is where we add all our sprites, sounds, levels, text, etc.
    create: function () {
        this.initGraphics();
        this.initPhysics();
        this.initKeyboard();
        this.startDemo();
    },

    // The update function is run every frame. The default frame rate is 60 frames per second, so the update function is run 60 times per second
    update: function () {

    },

    initGraphics: function () {
        this.backgroundGraphics = game.add.graphics(0, 0);
        this.backgroundGraphics.lineStyle(2, 0xFFFFFF, 1);

        for (var y = 0; y < gameProperties.screenHeight; y += gameProperties.dashSize * 2) {
            this.backgroundGraphics.moveTo(game.world.centerX, y);
            this.backgroundGraphics.lineTo(game.world.centerX, y + gameProperties.dashSize);
        }

        this.ballSprite = game.add.sprite(game.world.centerX, game.world.centerY, graphicAssets.ballName);
        this.ballSprite.anchor.set(0.5, 0.5);

        this.paddleLeftSprite = game.add.sprite(gameProperties.paddleLeft_x, game.world.centerY, graphicAssets.paddleName);
        this.paddleLeftSprite.anchor.set(0.5, 0.5);

        this.paddleRightSprite = game.add.sprite(gameProperties.paddleRight_x, game.world.centerY, graphicAssets.paddleName);
        this.paddleRightSprite.anchor.set(0.5, 0.5);
    },

    initPhysics: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.enable(this.ballSprite, phaser.Physics.ARCADE);

        this.ballSprite.checkWorldBounds = true;
        this.ballSprite.body.collideWorldBounds = true;
        this.ballSprite.body.immovable = true;
        this.ballSprite.body.bounce.set(1);

        this.paddleGroup = game.add.group();
        this.paddleGroup.enableBody = true;
        this.paddleGroup.physicsBodyType = Phaser.Physics.ARCADE;

        this.paddleGroup.add(this.paddleLeftSprite);
        this.paddleGroup.add(this.paddleRightSprite);

        this.paddleGroup.setAll('checkWorldBounds', true);
        this.paddleGroup.setAll('body.collideWorldBounds', true);
        this.paddleGroup.setAll('body.immovable', true);
    },

    initKeyboard: function () {
        this.paddleLeft_up = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.paddleLeft_down = game.input.keyboard.addKey(Phaser.Keyboard.Z);

        this.paddleRight_up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.paddleRight_down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    }

    startDemo: function () {
        this.resetBall();
        this.enablePaddles(false);
        game.input.onDown.add(this.startGame, this);
    },

    startGame: function () {
        game.input.onDown.remove(this.startGame, this);

        this.enablePaddles(true);
        this.resetBall();
    },

    resetBall: function () {
        this.ballSprite.reset(game.world.centerX, game.rnd.between(0, gameProperties.screenHeight))
        this.ballSprite.visible = false;
        game.time.events.add(Phaser.Timer.SECOND * gameProperties.ballStartDelay, this.startBall, this);

    },

    startBall: function () {
        this.ballSprite.visible = true;
        
        var randomAngle = game.rnd.pick(gameProperties.ballRandomStartingAngleRight.concat(gameProperties.ballRandomStartingAngleLeft));
        
        game.physics.arcade.velocityFromAngle(randomAngle, gameProperties.ballVelocity, this.ballSprite.body.velocity);
    },

    enablePaddles: function(enabled) {
        this.paddleGroup.setAll('visible', enabled);
        this.paddleGroup.setAll('body.enable',enabled);

        this.paddleLeft_up.enabled = enabled;
        this.paddleLeft_down.enabled = enabled;
        this.paddleRight_up.enabled = enabled;
        this.paddleRight_down.enabled = enabled;
    },
};

// Initialise the Phaser framework by creating an instance of a Phaser.Game object and assigning it to a local variable called 'game'.
// The first two arguments are the width and the height of the canvas element. In this case 640 x 480 pixels. You can resize this in the gameProperties object above.
// The third argument is the renderer that will be used. Phaser.AUTO is used to automatically detect whether to use the WebGL or Canvas renderer.
// The fourth argument is 'gameDiv', which is the id of the DOM element we used above in the index.html file where the canvas element is inserted.
var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');

// Here we declare and add a state to the game object.
// The first argument is the state name that will is used to switch between states
// The second argument is the object name that will used when a state name is called
game.state.add('main', mainState);

// We are using the 'main' state name as the argument to load our new state.
game.state.start('main');











