import { v4 as uuid } from 'uuid'

export type ProductType = {
    id: any,
    name: string,
    image: string,
    price: {
        salePrice?: number,
        price: number
    },
    rating: number,
    item: number,
    ordered: number,
    category: string
}

const pizzas: ProductType[] = [
    {
        id: uuid(),
        name: 'Neapolitan',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-007-644a7d8815603.png?1682609569',
        price: {
            salePrice: 7.50,
            price: 7.90,
        },
        rating: 4.5,
        item: 1000,
        ordered: 100,
        category: 'pizza'
    },
    {
        id: uuid(),
        name: 'Chicago',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-028-644a7cbba473a.png?1682603542',
        price: {
            price: 7.70,
        },
        rating: 4.7,
        item: 1200,
        ordered: 60,
        category: 'pizza'
    },
    {
        id: uuid(),
        name: 'Sicilian',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-039-644a7bc059190.png?1682603270',
        price: {
            salePrice: 8.10,
            price: 8.30,
        },
        rating: 4.6,
        item: 900,
        ordered: 90,
        category: 'pizza'
    },
    {
        id: uuid(),
        name: 'Four Cheese',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2020-10-001-5f8871e823a03.png?1609925862',
        price: {
            price: 8.30,
        },
        rating: 4.8,
        item: 600,
        ordered: 90,
        category: 'pizza'
    },
    {
        id: uuid(),
        name: 'Teriyaki',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2020-10-017-5faa945a8a044.png?1609925848',
        price: {
            salePrice: 8.30,
            price: 8.80,
        },
        rating: 4.8,
        item: 600,
        ordered: 90,
        category: 'pizza'
    },
    {
        id: uuid(),
        name: 'Barbecue',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood011-5e3d18c7ef96a.png?1609925834',
        price: {
            salePrice: 8.30,
            price: 8.80,
        },
        rating: 4.5,
        item: 600,
        ordered: 90,
        category: 'pizza'
    },
    {
        id: uuid(),
        name: 'Caucasian',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood01817-5ccc06029202b.png?1609925832',
        price: {
            salePrice: 7.70,
            price: 8.00,
        },
        rating: 4.4,
        item: 600,
        ordered: 90,
        category: 'pizza'
    },
]

const sushi: ProductType[] = [
    {
        id: uuid(),
        name: 'Philadelphia',
        image: 'https://img.freepik.com/premium-photo/set-sushi-rolls-with-eel-salmon-avocado-cucumber-nori-leaves-cream-cheese-inside-isolated-white_85601-187.jpg',
        price: {
            salePrice: 8.50,
            price: 8.90,
        },
        rating: 4.5,
        item: 1000,
        ordered: 100,
        category: 'sushi'
    },
    {
        id: uuid(),
        name: 'Avocado',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQs_9hT_X-HVX6uJ8AYxOi2C9hbkreEh1C67QvYyw1VxTgFAgHb-C4d6IyFOSLZ_62ouM&usqp=CAU',
        price: {
            price: 9.20,
        },
        rating: 4.7,
        item: 1200,
        ordered: 60,
        category: 'sushi'
    },
    {
        id: uuid(),
        name: 'Krenk',
        image: 'https://img.freepik.com/premium-photo/slate-board-with-sushi-set-isolated-white-background_185193-75522.jpg?w=360',
        price: {
            salePrice: 8.20,
            price: 8.45,
        },
        rating: 4.6,
        item: 900,
        ordered: 90,
        category: 'sushi'
    },
    {
        id: uuid(),
        name: 'Baked roll',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/s-ugrem-i-omletom-627cec72d9039.png?1652366674',
        price: {
            salePrice: 8.40,
            price: 8.65,
        },
        rating: 4.8,
        item: 900,
        ordered: 90,
        category: 'sushi'
    },
    {
        id: uuid(),
        name: 'Baked tuna',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/s-tuncem-627cea1972141.png?1652366652',
        price: {
            price: 8.65,
        },
        rating: 4.8,
        item: 900,
        ordered: 90,
        category: 'sushi'
    },
    {
        id: uuid(),
        name: 'Vesuvius',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/vezuvii-hot-roll-ish-5c6aa96c04854.png?1609925828',
        price: {
            salePrice: 8.20,
            price: 8.85,
        },
        rating: 4.4,
        item: 900,
        ordered: 90,
        category: 'sushi'
    },
    {
        id: uuid(),
        name: 'Unagi',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2021-05-004-6278d6e581122.png?1652086599',
        price: {
            salePrice: 8.50,
            price: 8.75,
        },
        rating: 4.7,
        item: 900,
        ordered: 90,
        category: 'sushi'
    },
    {
        id: uuid(),
        name: 'Krakatau ',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/krakatau-hot-roll-ish-5c6aaa71e111b.png?1609925766',
        price: {
            salePrice: 8.50,
            price: 8.75,
        },
        rating: 4.7,
        item: 900,
        ordered: 90,
        category: 'sushi'
    },
]

const burgers: ProductType[] = [
    {
        id: uuid(),
        name: 'Texas',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/burger-texas-605c987d156c5.png?1616683818',
        price: {
            salePrice: 6.50,
            price: 6.90,
        },
        rating: 4.5,
        item: 1000,
        ordered: 100,
        category: 'burger'
    },
    {
        id: uuid(),
        name: 'Black Chicken',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/black-chicken-burger-605c9903cee3d.png?1616683147',
        price: {
            salePrice: 7.20,
            price: 7.50,
        },
        rating: 5.0,
        item: 1000,
        ordered: 100,
        category: 'burger'
    },
    {
        id: uuid(),
        name: 'Chicken Hawaii',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/iinstafood05802-5d93125502af4.png?1609925794',
        price: {
            price: 7.50,
        },
        rating: 3.9,
        item: 1000,
        ordered: 100,
        category: 'burger'
    },
    {
        id: uuid(),
        name: 'Blue Сheese',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood03110-5cfab2e1ca184.png?1609925776',
        price: {
            salePrice: 7.20,
            price: 7.50,
        },
        rating: 4.9,
        item: 1000,
        ordered: 100,
        category: 'burger'
    },
    {
        id: uuid(),
        name: 'French',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/burger-french-6278d3cb4f02b.png?1652085721',
        price: {
            salePrice: 7.60,
            price: 8.00,
        },
        rating: 4.8,
        item: 1000,
        ordered: 100,
        category: 'burger'
    },
]

const drinks: ProductType[] = [
    {
        id: uuid(),
        name: 'Coca-Cola',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/cc-glass-bottle-250ml-c-kryshkoy-5c63e126d34be.png?1609925870',
        price: {
            salePrice: 1.50,
            price: 1.90,
        },
        rating: 4.5,
        item: 1000,
        ordered: 100,
        category: 'drink'
    },
    {
        id: uuid(),
        name: 'Fanta Orange',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/fanta-orange-05l-pet-60ec25d72fd36.png?1626106119',
        price: {
            salePrice: 1.20,
            price: 1.60,
        },
        rating: 4.7,
        item: 1000,
        ordered: 100,
        category: 'drink'
    },
    {
        id: uuid(),
        name: 'Burn',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/intl-250ml-burn-original-5c63e450bf660.png?1609925842',
        price: {
            price: 2.90,
        },
        rating: 4.2,
        item: 1000,
        ordered: 100,
        category: 'drink'
    },
    {
        id: uuid(),
        name: 'Sprite',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/spr-500ml-b-5c63eb24a3a41.png?1609925856',
        price: {
            price: 2.40,
        },
        rating: 4.7,
        item: 1000,
        ordered: 100,
        category: 'drink'
    },
    {
        id: uuid(),
        name: 'Fanta',
        image: 'https://instafood.com.ua/images/full_shop_product_pc/fanta-orange-05l-pet-60ec25d72fd36.png?1626106119',
        price: {
            price: 2.50,
        },
        rating: 4.8,
        item: 1000,
        ordered: 100,
        category: 'drink'
    },
]

const products = [
    ...pizzas,
    ...sushi,
    ...burgers,
    ...drinks
]

export { products }