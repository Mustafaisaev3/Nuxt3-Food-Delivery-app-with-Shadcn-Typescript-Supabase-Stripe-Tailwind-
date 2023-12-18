import { v4 as uuid } from 'uuid'
import type { ProductType } from "./products"

export type OrderType = {
    id: number | string,
    products: ProductType[],
    orderInfo: {
        firstName: string,
        lustName: string,
        country: string,
        city: string,
        zip: string,
        street: string,
        appartment: string,
        shippingMethod: string,
        paymentMethod: string,
        cardNumber: string,
        expDate: string,
        cvv: string,
        cartTotal: number
    },
    status: any
}

export const orders: OrderType[] = [
    {
        id: uuid(),
        products: [
            {
                id: uuid(),
                name: 'Chicago',
                image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-028-644a7cbba473a.png?1682603542',
                price: 7.50,
                rating: 4.7,
                item: 1200,
                ordered: 60,
                category: 'pizza'
            },
            {
                id: uuid(),
                name: 'Sicilian',
                image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-039-644a7bc059190.png?1682603270',
                price: 8.20,
                rating: 4.6,
                item: 900,
                ordered: 90,
                category: 'pizza'
            },
            {
                id: uuid(),
                name: 'Avocado',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQs_9hT_X-HVX6uJ8AYxOi2C9hbkreEh1C67QvYyw1VxTgFAgHb-C4d6IyFOSLZ_62ouM&usqp=CAU',
                price: 9.20,
                rating: 4.7,
                item: 1200,
                ordered: 60,
                category: 'sushi'
            },
        ],
        status: {
            id: '1',
            title: 'new',
            color: '#2dff2d',
            background: '#2dff2d42',
            // icon: 'mdi:border-color'
            icon: '/images/order-status/new.svg'
        }
    },
    {
        id: uuid(),
        products: [
            {
                id: uuid(),
                name: 'Chicago',
                image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-028-644a7cbba473a.png?1682603542',
                price: 7.50,
                rating: 4.7,
                item: 1200,
                ordered: 60,
                category: 'pizza'
            },
            {
                id: uuid(),
                name: 'Sicilian',
                image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-039-644a7bc059190.png?1682603270',
                price: 8.20,
                rating: 4.6,
                item: 900,
                ordered: 90,
                category: 'pizza'
            },
            {
                id: uuid(),
                name: 'Avocado',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQs_9hT_X-HVX6uJ8AYxOi2C9hbkreEh1C67QvYyw1VxTgFAgHb-C4d6IyFOSLZ_62ouM&usqp=CAU',
                price: 9.20,
                rating: 4.7,
                item: 1200,
                ordered: 60,
                category: 'sushi'
            },
        ],
        status: 
        {
            id: '2',
            title: 'preparation',
            color: '#e62dff',
            background: '#e62dff4d',
            // icons: 'mdi:bowl-mix-outline'
            icon: '/images/order-status/cooking.svg'
        },
    },
    {
        id: uuid(),
        products: [
            {
                id: uuid(),
                name: 'Chicago',
                image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-028-644a7cbba473a.png?1682603542',
                price: 7.50,
                rating: 4.7,
                item: 1200,
                ordered: 60,
                category: 'pizza'
            },
            {
                id: uuid(),
                name: 'Sicilian',
                image: 'https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-039-644a7bc059190.png?1682603270',
                price: 8.20,
                rating: 4.6,
                item: 900,
                ordered: 90,
                category: 'pizza'
            },
            {
                id: uuid(),
                name: 'Avocado',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQs_9hT_X-HVX6uJ8AYxOi2C9hbkreEh1C67QvYyw1VxTgFAgHb-C4d6IyFOSLZ_62ouM&usqp=CAU',
                price: 9.20,
                rating: 4.7,
                item: 1200,
                ordered: 60,
                category: 'sushi'
            },
        ],
        status: {
            id: '1',
            title: 'new',
            color: '#2dff2d',
            background: '#2dff2d42',
            // icon: 'mdi:border-color'
            icon: '/images/order-status/new.svg'
        }
    },

]
