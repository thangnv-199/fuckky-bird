const flappyBirdStorage = storage('flappybird');

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

const birdSelect = document.querySelectorAll('.bird-select');
const bgSelect = document.querySelectorAll('.bg-select');
const pipeSelect = document.querySelectorAll('.pipe-select');

const sideRight = document.querySelector('.side-right');
const gameoverContainer = document.querySelector('.gameover-container');
const scoreContainer = document.querySelector('.score-container');
const currentScore = document.querySelector('.current-score');
const hightScore = document.querySelector('.hight-score');
const counter = document.querySelector('.counter');
const buttonGroup = document.querySelector('.button-group')
const startButton = document.querySelector('.start-button');
const reloadButton = document.querySelector('.reload-button');

const flySound = document.getElementById('fly-sound');
const scoreSound = document.getElementById('score-sound');
const hitSound = document.getElementById('hit-sound');
const dieSound = document.getElementById('die-sound');

// const BEGIN_START_IMAGE = new Image();
// BEGIN_START_IMAGE.src = './asset/img/message.png';
// BEGIN_START_IMAGE.addEventListener('load', function() {
//     ctx.drawImage(BEGIN_START_IMAGE, 50, 50, GAME_WIDTH - 100, GAME_HEIGHT - 100);
// })

let GAME_SPEED = 3;
const GAME_SPEED_DEFAULT = GAME_SPEED;
const GAME_FRAME = 30;

const GAME_HEIGHT = 700;
const GAME_WIDTH = GAME_HEIGHT / 2;

const BIRD_START_X = Math.round(GAME_WIDTH / 4 );
const BIRD_WIDTH = 34;
const BIRD_HEIGHT = 24;

const BASE_HEIGHT = Math.round(GAME_HEIGHT / 5);
const BASE_Y = GAME_HEIGHT - BASE_HEIGHT;

const PIPE_WIDTH = 52;
const PIPE_HEIGHT = 320;
const PIPE_SPACE = Math.round((GAME_HEIGHT - BASE_HEIGHT) / 4);

const MAX_BOTTOM = GAME_HEIGHT - BIRD_HEIGHT;
const ACCELERATION = 1;
const BIRD_FLY = -13;

const CURRENT_GAME_FRAME = Math.round(1000 / GAME_FRAME);

//config position pipe random
const GAME_HEIGHT_NOT_BASE = GAME_HEIGHT - BASE_HEIGHT;
const PIPE_Y_START = GAME_HEIGHT_NOT_BASE - PIPE_HEIGHT;
const LIMIT = PIPE_SPACE + PIPE_HEIGHT - PIPE_Y_START;

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;


//Bird data

const yellowBird1 = new Image();
const yellowBird2 = new Image();
const yellowBird3 = new Image();
yellowBird1.src = './asset/img/yellowbird-downflap.png';
yellowBird2.src = './asset/img/yellowbird-midflap.png';
yellowBird3.src = './asset/img/yellowbird-upflap.png';

const yellowBirdImages = [yellowBird1, yellowBird2, yellowBird3];
const blueBird1 = new Image();
const blueBird2 = new Image();
const blueBird3 = new Image();

blueBird1.src = './asset/img/bluebird-downflap.png';
blueBird2.src = './asset/img/bluebird-midflap.png';
blueBird3.src = './asset/img/bluebird-upflap.png';

const blueBirdImages = [blueBird1, blueBird2, blueBird3];

const redBird1 = new Image();
const redBird2 = new Image();
const redBird3 = new Image();
redBird1.src = './asset/img/redbird-downflap.png';
redBird2.src = './asset/img/redbird-midflap.png';
redBird3.src = './asset/img/redbird-upflap.png';

const redBirdImages = [redBird1, redBird2, redBird3];

const birds = [yellowBirdImages, blueBirdImages, redBirdImages];


//background data

const background1 = new Image();
background1.src = './asset/img/background-day.png';

const background2 = new Image();
background2.src = './asset/img/background-night.png';

const backgrounds = [background1, background2];

//pipe data

const pipeGreenUp = new Image();
const pipeGreendown = new Image();
pipeGreenUp.src = './asset/img/pipe-green-up.png';
pipeGreendown.src = './asset/img/pipe-green-down.png';

const pipeGreen = [pipeGreenUp, pipeGreendown]

const pipeRedUp = new Image();
const pipeReddown = new Image();
pipeRedUp.src = './asset/img/pipe-red-up.png';
pipeReddown.src = './asset/img/pipe-red-down.png';

const pipeRed = [pipeRedUp, pipeReddown]

const pipes = [pipeGreen, pipeRed];