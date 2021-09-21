class Background {
    constructor(bg){
        this.bg = bg;
        this.x = 0;
        this.width = GAME_WIDTH;
        this.height = GAME_HEIGHT;
        
    }

    update() {
        this.x -= GAME_SPEED / 2;
        if (this.x <= -GAME_WIDTH){
            this.x = 0;
        }
    }

    draw() {
        ctx.drawImage(this.bg, this.x, 0, this.width, this.height);
        ctx.drawImage(this.bg, this.x + this.width, 0, this.width, this.height);
    }
}