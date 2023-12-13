export type ShippingType = {
    id: any,
    title: string,
    description: string,
    price: string,
}

const ShippingMethods: ShippingType[] = [
    {
        id: 111,
        title: 'Standart Shipping',
        description: 'by the 5th of June 8:00 - 21:00',
        price: '4.00'
    },
    {
        id: 222,
        title: 'Fast Shipping',
        description: 'Tomorrow the 2th of June 8:00 - 21:00',
        price: '7.59'
    },
]

export { ShippingMethods }