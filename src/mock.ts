import americano from './assets/images/americano.png'
import latte from './assets/images/latte.png'
import flatWhite from './assets/images/flat-white.png'
import vienneseCoffee from './assets/images/vience.png'
import hotChocolate from './assets/images/hot-chocolate.png'
import cappuccino from './assets/images/cappuccino.png'

export interface Item {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export interface CafeResult {
	resultCount: number
	result: Item[]
}

export const ITEM_MOCK: CafeResult = {
	resultCount: 6,
	result: [
  {
    id: 1,
    name: 'Americano',
    price: 229,
    image: americano,
		description: 'Americano is a coffee drink made with espresso and water. It is a simple and easy-to-make coffee drink that is popular in many parts of the world.'
  },
  {
    id: 2,
    name: 'Latte',
    price: 299,
    image: latte,
		description: 'Latte is a coffee drink made with espresso and milk. It is a simple and easy-to-make coffee drink that is popular in many parts of the world.'
  },
  {
    id: 3,
    name: 'Flat White',
    price: 300,
    image: flatWhite,
		description: 'Flat White is a coffee drink made with espresso and milk. It is a simple and easy-to-make coffee drink that is popular in many parts of the world.'
  },
	{
		id: 4,
		name: 'Viennese coffee',
		price: 349,
		image: vienneseCoffee,
		description: 'Viennese coffee is a coffee drink made with espresso and milk. It is a simple and easy-to-make coffee drink that is popular in many parts of the world.'
	},
	{
		id: 5,
		name: 'Hot chocolate',
		price: 349,
		image: hotChocolate,
		description: 'Hot chocolate is a coffee drink made with cocoa and milk. It is a simple and easy-to-make coffee drink that is popular in many parts of the world.'
	},
	{
		id: 6,
		name: 'Cappuccino',
		price: 319,
		image: cappuccino,
		description: 'Cappuccino is a coffee drink made with espresso and milk. It is a simple and easy-to-make coffee drink that is popular in many parts of the world.'
	}
	]
}
