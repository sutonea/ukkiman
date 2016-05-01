window.onload = function(){
  var game = new Core(WIDTH_GAME, HEIGHT_GAME);

  game.fps = FPS;
  //game.preload("chara0.png");

  game.onload = function(){
    game.rootScene.backgroundColor = COLOR_ROOT_SCENE_BACKGROUND;

    game.rootScene.addChild(createWall());

    myChara = createMyChara();
    game.rootScene.addChild(myChara);

    slowBird = new SlowBird();
    slowBird.x = 0 - WIDTH_SPRITE_BASE;
    slowBird.y = 10;
    game.rootScene.addChild(slowBird);

    bulletList = createBulletList();
    for (var i=0; i < bulletList.bullets.length; i++) {
      game.rootScene.addChild(bulletList.bullets[i]);
    }

    game.rootScene.addEventListener("touchstart", function() {
      if (myChara.touchingWall()) {
        myChara.kickWall();
      }
    });

    myChara.addEventListener("enterframe", function() {
      if (myChara.inTheAir()) {
        myChara.closeToWall();
      } else {
        myChara.downSlow();
	      if ( this.age % 10 == 0 ){
	        var bullet = bulletList.pickNonActive();
	        if (bullet != null) {
            bullet.x = myChara.x + 10;
	          bullet.y = myChara.y + 10;
	        }
	      }
      }
      bulletList.moveAll();
      slowBird.move();
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

function createBulletList() {
  bullets = [ 
              new Bullet((-10 - WIDTH_BULLET), 0), 
              new Bullet((-10 - WIDTH_BULLET), 0), 
              new Bullet((-10 - WIDTH_BULLET), 0) 
            ];
  return new BulletList(bullets);
}
