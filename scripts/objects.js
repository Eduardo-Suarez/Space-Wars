// --- objects --- //
class Objects {
	constructor() {
	}
	spaceship(x, y, spaceship_image) {
		this.x = x;
		this.y = y;
		this.width = 34;
		this.height = 28;
		this.spaceship_image = spaceship_image;
		this.spaceship_image.src = "/images/fighter.png";
		return this;
	}
	bullet(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
	ufo(x, y, line, column, ufo_image, level) {
		this.x = x;
		this.y = y;
		this.line = line;
		this.column = column;
		this.width = 32;
		this.height = 24;
		this.ufo_image = ufo_image;
		this.level = level;
		//even-odd level selector		 
		this.ufo_image.src = (this.level % 2 == 0) ? "/images/spaceship2.png" : "/images/spaceship2.png";
		return this;
	}
	bomb(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
}
;




