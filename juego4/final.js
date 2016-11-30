
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {

}

var timer;
var total = 0;
var clicks = 0;
var palabras = ["palabra1","palabra2","palabra3","palabra4",]

function create() {
    game.stage.backgroundColor = '#000';
    //  Create our Timer
    timer = game.time.create(false);
    //  Set a TimerEvent to occur after 2 seconds
    timer.loop(2000, updateCounter, this);
    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();

    var text = game.add.text(game.world.centerX, game.world.centerY, "palabra1", { font: "65px Arial", fill: "#ff0044", align: "center" });
    text.anchor.set(0.5);
    text.inputEnabled = true;

    text.events.onInputDown.add(down, this);
    text.events.onInputUp.add(up, this);
}

function down(item) {
    clicks++;
    item.text = "clicked " + clicks + " times";
}

function up(item) {
    //item.text = "thanks for clicking!";
}

function updateCounter() {
    total++;
}

function render() {

    game.debug.text('Time until event: ' + timer.duration.toFixed(0), 32, 32);
    game.debug.text('Duración: ' + + timer.seconds, 32, 64);
    game.debug.text('Loop Count: ' + total, 32, 96);

}
