import check from '../public/images/order-status/check.svg'

type OrderStatusType = {
    id: any,
    title: string,
    color: string,
    background: string,
    icon: string
}

export const OrderStatusTypes = [
    {
        id: '1',
        title: 'new',
        color: '#2dff2d',
        background: '#2dff2d42',
        // icon: 'mdi:border-color'
        icon: '/images/order-status/new.svg'
    },
    {
        id: '2',
        title: 'preparation',
        color: '#e62dff',
        background: '#e62dff4d',
        // icons: 'mdi:bowl-mix-outline'
        icon: '/images/order-status/cooking.svg'
    },
    {
        id: '3',
        title: 'delivery',
        color: '#ffea2d',
        background: '#ffea2d38',
        // icon: 'mdi:truck-delivery-outline'
        icon: '/images/order-status/delivery.svg'
    },
    {
        id: '4',
        title: 'done',
        color: '#2dd5ff',
        background: '#2dd5ff4f',
        // icons: 'mdi:check-outline',
        icon: '/images/order-status/check.svg'
    },
    {
        id: '5',
        title: 'reject',
        color: '#ff4d4d',
        background: '#ff4d4d82',
        // icons: 'mdi:clipboard-remove-outline'
        icon: '/images/order-status/reject.svg'
    },
]

