var SlowBird = Class.create(EnemyBase, {
  initialize: function(){
    EnemyBase.call(this);
    this.backgroundColor = "#992222";
  //  this.moves.push(this.moveRightSlow);
  },

  move: function() {
    this.moveRightSlow();
  }
});
