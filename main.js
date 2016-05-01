window.onload = function(){
  var game = new Core(WIDTH_GAME, HEIGHT_GAME);

  game.fps = FPS;
  //game.preload("chara0.png");

  game.onload = function(){
    game.rootScene.backgroundColor = COLOR_ROOT_SCENE_BACKGROUND;

    wall = new Sprite(X_WALL, HEIGHT_GAME);
    wall.backgroundColor = COLOR_WALL;
    wall.x = WIDTH_GAME - wall.width;
    wall.y = 0;
    game.rootScene.addChild(wall);

    myChara = new Monkey(32, 32);
    myChara
    game.rootScene.addChild(myChara);

    bullets = [ 
                new Bullet((-10 - WIDTH_BULLET), 0), 
                new Bullet((-10 - WIDTH_BULLET), 0), 
                new Bullet((-10 - WIDTH_BULLET), 0) 
              ];
    for (var i=0; i < bullets.length; i++) {
      game.rootScene.addChild(bullets[i]);
    }

    bulletList = new BulletList(bullets);

    game.rootScene.addEventListener("touchstart", function() {
      if (myChara.x == X_MAX ) {
        myChara.kickWall();
      }
    });

    myChara.addEventListener("enterframe", function() {
      if (myChara.x < X_MAX) {
        myChara.closeToWall();
      } else {
        myChara.downSlow();
	if ( this.age % 5 == 0 ){
	  var bullet = bulletList.pickNonActive();
	  if (bullet != null) {
            bullet.x = myChara.x + 10;
	    bullet.y = myChara.y + 10;
	  }
	}
      }
      bulletList.moveAll();
    });

    myChara.addEventListener("touchstart", function() {
    });
  };

  game.start();
};
