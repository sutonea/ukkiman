var Bullet = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, WIDTH_BULLET, 6);
    this.backgroundColor = "#BBBB00";
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  },

  transportTo: function(shooter) {
    this.x = shooter.x + WIDTH_SPRITE_BASE / 2;
    this.y = shooter.y + WIDTH_SPRITE_BASE / 2;
  },

  //衝突候補(衝突する可能性のあるもの)を設定する
  setTargets: function(targets) {
    this.targets = targets;
  },

  affectTo: function(target) {
    //要検討:ダメージを与える具体的な処理を、敵側と弾丸側のどちらに実装するか
    //ライフを減らす処理は弾丸側で、外観を変える処理は敵側がよいかもしれない
    target.damaged();
  },

  //衝突候補の中から、重なっているものを選び、それらに衝突時の影響を与える
  affectToTargets: function() {
    for (var i=0; i< this.targets.length; i++) {
      if (this.intersect(this.targets[i])) {
        this.affectTo(this.targets[i]);
        this.transportTo(this.shooter);
      }
    }
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
