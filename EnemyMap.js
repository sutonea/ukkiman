var ENEMY_MAP = new Array();

// enemyEntry の例:
// ゲーム開始から180フレーム経過したら、SlowBird をゲーム内に入場させる。
// その時の位置は、x座標:0 y座標:30
// {frame: 60*3, object: new SlowBird(), x: 0 , y: 30}

ENEMY_MAP.push( new SlowBird(0,  30, 60 *  1    ) );
ENEMY_MAP.push( new SlowBird(0,  60, 60 *  3    ) );
ENEMY_MAP.push( new SlowBird(0,  90, 60 *  5    ) );

ENEMY_MAP.push( new SlowBird(0, 200, 60 *  8    ) );
ENEMY_MAP.push( new SlowBird(0, 150, 60 *  9    ) );
ENEMY_MAP.push( new SlowBird(0, 100, 60 * 10    ) );

ENEMY_MAP.push( new SlowBird(0,   0, 60 * 13    ) );
ENEMY_MAP.push( new SlowBird(0,  40, 60 * 13 + 1) );
ENEMY_MAP.push( new SlowBird(0,  80, 60 * 13 + 2) );
ENEMY_MAP.push( new SlowBird(0, 120, 60 * 13 + 3) );
ENEMY_MAP.push( new SlowBird(0, 160, 60 * 13 + 4) );
ENEMY_MAP.push( new SlowBird(0, 200, 60 * 13 + 5) );
