var game = new Phaser.Game(1024,768,Phaser.AUTO,'game-container')

var gameState = {
    preload: function(){
        //Cargamos todos los recursos que necesitará este estado del juego
        //game.load.image('background', 'valley.png');
        game.load.spritesheet('player', 'assets/metalslug_mummy37x45.png', 37, 45, 18);
    },
    create: function(){
        //Creamos los objetos pertinentes
        var mummy = game.add.sprite(300, 200, 'mummy');
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },
    update: function(){
        //Este es el bucle, irá ejecutándose este código múltiples veces por segundo
        if (leftKey.isDown){
            sprite.x--;
        }else if (rightKey.isDown){
            sprite.x++;
        }
    }
}
//console.log(gameState);
game.state.add('start', gameState );
game.state.start('start');