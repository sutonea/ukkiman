window.onload = function(){
  var game = new Core(WIDTH_GAME, HEIGHT_GAME);

  game.fps = FPS;
  //game.preload("chara0.png");

  game.onload = function(){
    game.rootScene.backgroundColor = COLOR_ROOT_SCENE_BACKGROUND;

    game.rootScene.addChild(createWall());

    myChara = createMyChara();
    game.rootScene.addChild(myChara);

    var enemyes = new Array();
    game.rootScene.addEventListener("touchstart", function() {
      if (myChara.touchingWall()) {
        myChara.kickWall();
      }
    });

    bullets = createBullets();
    for (var i=0; i < bullets.length; i++) {
      bullets[i].setTargets(enemyes);
      bullets[i].shooter = myChara;
      game.rootScene.addChild(bullets[i]);
    }

    var nextEnemy = ENEMY_MAP.shift();
    game.rootScene.addEventListener("enterframe", function() {
      if (nextEnemy != null && nextEnemy.appearsAt == game.frame) {
        nextEnemy.activate();
        enemyes.push( nextEnemy );
        game.rootScene.addChild( nextEnemy );
        nextEnemy = ENEMY_MAP.shift();
      }

      if (myChara.inTheAir()) {
        myChara.closeToWall();
      } else {
        myChara.downSlow();
	      if ( this.age % 10 == 0 ){
	        var bullet = bullets.find(function(bullet){
            return !bullet.active();
          });
	        if (bullet != null) {
            bullet.x = myChara.x + 10;
	          bullet.y = myChara.y + 10;
	        }
	      }
      }
      var gameObjects = enemyes.concat(bullets);
      gameObjects.map(function(obj){
        obj.move();
        obj.affectToTargets();
      });
    });
  };

  game.start();
};

function createWall(){
  wall = new Sprite(X_WALL, HEIGHT_GAME);
  wall.backgroundColor = COLOR_WALL;
  wall.x = WIDTH_GAME - wall.width;
  wall.y = 0;
  return wall;
}

function createMyChara(){
  return new Monkey(32, 32);
}

function createBullets() {
  bullets = [ 
              new Bullet((-10 - WIDTH_BULLET), 0), 
              new Bullet((-10 - WIDTH_BULLET), 0), 
              new Bullet((-10 - WIDTH_BULLET), 0) 
            ];
  bullets.map(function(bullet){bullet.speedX = -6;});
  return bullets;
}

