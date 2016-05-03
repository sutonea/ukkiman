window.onload = function(){
  var game = new Core(WIDTH_GAME, HEIGHT_GAME);

  game.fps = FPS;
  //game.preload("chara0.png");

  game.onload = function(){
    game.rootScene.backgroundColor = COLOR_ROOT_SCENE_BACKGROUND;

    game.rootScene.addChild(createWall());

    myChara = createMyChara();
    game.rootScene.addChild(myChara);

    bulletList = createBulletList();
    for (var i=0; i < bulletList.bullets.length; i++) {
      game.rootScene.addChild(bulletList.bullets[i]);
    }

    var enemyList = new EnemyList(new Array());

    game.rootScene.addEventListener("touchstart", function() {
      if (myChara.touchingWall()) {
        myChara.kickWall();
      }
    });

    myChara.addEventListener("enterframe", function() {
      if (ENEMY_MAP.length > 0 && ENEMY_MAP[0].frame == game.frame) {
        var gotEnemy = ENEMY_MAP.shift().object;
        gotEnemy.activate();
        enemyList.enemyes.push( gotEnemy );
        game.rootScene.addChild( gotEnemy );
      }

      if (myChara.inTheAir()) {
        myChara.closeToWall();
      } else {
        myChara.downSlow();
	      if ( this.age % 10 == 0 ){
	        var bullet = bulletList.pickNonActive();
          //TODO enemyBulletList を作る。BulletListを汎化するとよさそう。要検討
	        if (bullet != null) {
            bullet.x = myChara.x + 10;
	          bullet.y = myChara.y + 10;
	        }
	      }
      }
      bulletList.moveAll();
      enemyList.moveAll();
      //slowBird.move();
      for (var i=0; i<enemyList.enemyes.length; i++){
        dbg_alert("dbg i: i:" + i);
        enemy = enemyList.enemyes[i];
        for (var j=0; j<bulletList.bullets.length; j++){
          dbg_alert("dbg bulletList.bullets.length:" + bulletList.bullets.length);
          dbg_alert("dbg j: j:" + j);
          bullet = bulletList.bullets[j]
          if (enemy.intersect(bullet)) {
            enemy.damaged();
            bullet.x = myChara.x;
            bullet.y = myChara.y;
          }
        }
      }
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

//function enter(game, enemyEntry) {
//  // enemyEntry には、EnemyMap.js で生成している連想配列を渡す
//  if (game.frame == enemyEntry.frame) {
//    enemyEntry.object.x = enemyEntry.x;
//    enemyEntry.object.y = enemyEntry.y;
//    enemyEntry.object.movable = true;
//  }
//  console.log("A enemy entered:");
//  console.log(enemyEntry);
//  game.rootScene.addChild(enemyEntry.object);
//  return enemyEntry.object;
//}
