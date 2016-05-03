var Bullet = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, WIDTH_BULLET, 6);
    this.backgroundColor = "#BBBB00";
    this.x = x;
    this.y = y;
    this.speedX = 0;
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
