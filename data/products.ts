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
]

const products = [
    ...pizzas,
    ...sushi
]

export { products }