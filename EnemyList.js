var EnemyList = function(enemyes) {
  this.enemyes = enemyes;
};

EnemyList.prototype.moveAll = function(){
  for (var i=0; i<this.enemyes.length; i++) {
    if (this.enemyes[i].active()) {
      this.enemyes[i].enterFrame();
    }
  }
  return null;
}
