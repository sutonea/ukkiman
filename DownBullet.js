var DownBullet = Class.create(EnemyBase, {
  initialize: function(XAtEnter, YAtEnter){
    EnemyBase.call(this, 10, 10);
    this.backgroundColor = "#FF0000";
    this.xAtEnter = xAtEnter;
    this.yAtEnter = yAtEnter;
    this.activate();
  },

  move: function(){
    this.y += 3;
  }
}
