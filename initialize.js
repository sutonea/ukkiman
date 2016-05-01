enchant();

var FPS = 60;

// 大きさの設定
var WIDTH_GAME         = 220;
var HEIGHT_GAME        = 420;

var WIDTH_SPRITE_BASE  =  32;
var HEIGHT_SPRITE_BASE =  32;

var WIDTH_BULLET       =  12;
var HEIGHT_BULLET      =   6;

// 位置の設定
var Y_FLOOR = HEIGHT_GAME - HEIGHT_SPRITE_BASE;
var X_WALL = 10;
var X_MAX = WIDTH_GAME - X_WALL - WIDTH_SPRITE_BASE;

// 色
var COLOR_ROOT_SCENE_BACKGROUND = "#222222"
var COLOR_WALL = "#444400";
var COLOR_MONKEY = "#BBBB00";
