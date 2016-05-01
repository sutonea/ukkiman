var EnemyBase = Class.create(Sprite, {
  initialize: function(){
    Sprite.call(this, WIDTH_SPRITE_BASE, HEIGHT_SPRITE_BASE);
    this.speedX = 0;
    this.speedY = 0;
    this.x = 0;
    this.y = 0;
  },

  moveRightSlow: function() {
    this.x += 0.3;
    this.x = Math.min(this.x, X_MAX);
  }
});
