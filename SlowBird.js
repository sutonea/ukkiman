var SlowBird = Class.create(EnemyBase, {
  initialize: function(XAtEnter, YAtEnter){
    EnemyBase.call(this, XAtEnter, YAtEnter);
    this.backgroundColor = "#992222";
    this.life = 3;
    this.hasBullet = true;
  },

  enterFrame: function() {
    this.move();
  },

  move: function() {
    if (this.touchingWall()) {
      this.slidingDownWall();
    } else {
      this.moveRightSlow();
    }
  },

  //ダメージを受ける
  damaged: function() {
    this.life--;
    if (this.life == 2) {
      this.backgroundColor = "#770000";
    }
    if (this.life == 1) {
      this.backgroundColor = "#550000";
    }
    if (this.life == 0) {
      this.deactivate();
    }
  },

});
