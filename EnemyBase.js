var EnemyBase = Class.create(Sprite, {
  initialize: function(xAtEnter, yAtEnter, appearsAt){
    Sprite.call(this, WIDTH_SPRITE_BASE, HEIGHT_SPRITE_BASE);
    this.appearsAt = appearsAt;
    this.deactivate();

    this.xAtEnter = xAtEnter;
    this.yAtEnter = yAtEnter;

    this.speedX = 0;
    this.speedY = 0;
  },

  activate: function() {
    this.x = this.xAtEnter;
    this.y = this.yAtEnter;
    this.movable = true;
  },

  deactivate: function() {
    this.x = -128; // 画面から追い出すことができれば、-128 でなくてもよい。
    this.y = -128;
    this.movable = false;
  },

  active: function() {
    return this.movable;
  },

  affectToTargets: function() {
  },

  moveRightSlow: function() {
    this.x += 0.3;
    this.x = Math.min(this.x, X_MAX + HEIGHT_SPRITE_BASE + X_WALL);
  },

  touchingWall: function() {
    return this.x == X_MAX 
  },

  slidingDownWall: function(){
    this.y += 1;
    this.y = Math.min(this.y, Y_FLOOR + HEIGHT_SPRITE_BASE);
  }
});
