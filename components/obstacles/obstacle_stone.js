var stone_width = 92;
var stone_height = 60;
// TODO: check stone dimensions
Crafty.c("OBSTACLE_TOP", {
	init : function () {
		this.requires('2D, DOM, Platform')
        this.attr({x: (GAME_SCREEN_WIDTH/2 +  GhostPlayer.x + 100),
             y: GAME_SCREEN_HEIGHT - DISTANCE_UP_FROM_BOTTOM_OF_SCREEN - stone_height, //   - (Math.random() * 10 - 10),
             w: stone_width, 
             h: stone_height})
		;
    },
    
});


Crafty.c(STONE, {
	init : function () {
		this.requires('2D, DOM, stone, Obstacle')
        this.attr({x: (GAME_SCREEN_WIDTH/2 +  GhostPlayer.x + 100),
             y: GAME_SCREEN_HEIGHT - DISTANCE_UP_FROM_BOTTOM_OF_SCREEN - stone_height - (Math.random() * 10 - 10),
             w: stone_width, 
             h: stone_height})
        this.collision([0, 5, this.w, 5, this.w, this.h, 0, this.h])

		
    },
    
});

