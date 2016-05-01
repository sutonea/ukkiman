var Monkey = Class.create(Sprite, {
  initialize: function() {
    Sprite.call(this, WIDTH_SPRITE_BASE, HEIGHT_SPRITE_BASE);
    this.backgroundColor = COLOR_MONKEY;
    this.x = X_MAX;
    this.speedX = 0.0;
    this.y = 20;
  },

  downSlow: function() {
    this.y += 2.5;
    this.y = Math.min(this.y, Y_FLOOR);
  },

  //壁を蹴る瞬間。左斜め上に加速する
  kickWall: function() {
    if(this.y < (HEIGHT_SPRITE_BASE * 2)){ return; }
    this.speedX = -8;
    this.closeToWall();
  },

  //壁をけってから、再度壁にはりつくまでの動作。
  closeToWall: function() {
    this.speedX += 0.9;
    this.x += this.speedX;
    this.x = Math.min(this.x, X_MAX);
    this.y -= 7;
  },

  createBullet: function() {
    //return new Bullet(this.x, this.y + 10);
  }
  

});
