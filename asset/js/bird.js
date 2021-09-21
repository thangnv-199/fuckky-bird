class Bird {
    constructor(bird){
        this.bird = bird;
        this.image = [];
        this.currentFrame = 0;
        this.currentImage = 0;
        this.y = 0;
        this.x = BIRD_START_X;
        this.width = BIRD_WIDTH;
        this.height = BIRD_HEIGHT;
        this.speedY = 0;
        this.posChangeStatus = Math.ceil(GAME_FRAME / this.bird.length);
    }

    flying() {
        this.speedY = BIRD_FLY;
    }

    update() {
        this.currentFrame++;
        if (this.currentFrame >= GAME_FRAME) {
            this.currentFrame = 0; 
        }

        this.currentImage = Math.floor(this.currentFrame / this.posChangeStatus);

        this.speedY += ACCELERATION;
        this.y += this.speedY;

        if (this.y >= MAX_BOTTOM){
            this.y = MAX_BOTTOM;
        }
        else if (this.y <= 0){
            this.y = 0;
        }
    }

    draw() {
        ctx.drawImage(this.bird[this.currentImage], this.x, this.y, this.width, this.height);
    }
}