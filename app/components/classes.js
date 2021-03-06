export class Cocktail {
	constructor({ id, glass, ice, method, ingredients, garnish, description, imgSrc, name }) {
		this.id = id
		this.glass = glass
		this.ice = ice
		this.method = method
		this.ingredients = ingredients
		this.garnish = garnish
		this.description = description
		this.imgSrc = imgSrc
		this.name = name

		this.favourite = false
	}

	get displayImgSrc() {
		return this.imgSrc || 'res://placeholder'
	}
}

export class Glass {
	constructor(name, type) {
		this.name = name
		this.type = type

		this.selected = false
	}
}

export class Ice {
	constructor(name) {
		this.name = name

		this.selected = false
	}
}

export class Method {
	constructor(name) {
		this.name = name

		this.selected = false
	}
}

// export class Ingredients {
// 	constructor(arr) {
// 		this.i = name
// 	}
// }

export class Garnish {
	constructor(name) {
		this.name = name

		this.selected = false
	}
}

// export class Misc {
// 	constructor(name, type) {
// 		this.name = name
// 		this.type = type
		
// 		this.selected = false
// 	}
// }