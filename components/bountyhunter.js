Crafty.c("BountyHunter", {
	init : function () {
		this.requires('2D, DOM, Color, Collision, Motion')
		this.attr({x: GAME_SCREEN_WIDTH / 25, y: GAME_SCREEN_HEIGHT - DOUBLE_UNIT - SINGLE_UNIT, w: SINGLE_UNIT, h: DOUBLE_UNIT})
		this.color('#111');
		this.vx += MOVE_RIGHT_RATE_BOUNTY_HUNTER;
	},
});

