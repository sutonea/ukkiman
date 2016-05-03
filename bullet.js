var Bullet = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, WIDTH_BULLET, 6);
    this.backgroundColor = "#BBBB00";
    this.x = x;
    this.y = y;
    this.speedX = -6;
    this.speedY = 0;
  },

  active: function() {
    return (0 - this.width) < this.x;
  },

  move: function() {
    if (this.active()){
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

});

var BulletList = function(bullets) {
  this.bullets = bullets;
};

BulletList.prototype.pickNonActive = function(){
  for (var i=0; i<this.bullets.length; i++) {
    if (!this.bullets[i].active()) {
      return this.bullets[i];
    }
  }
  return null;
}

BulletList.prototype.moveAll = function(){
  for (var i=0; i<this.bullets.length; i++) {
    if (this.bullets[i].active()) {
      this.bullets[i].move();
    }
  }
  return null;
}
