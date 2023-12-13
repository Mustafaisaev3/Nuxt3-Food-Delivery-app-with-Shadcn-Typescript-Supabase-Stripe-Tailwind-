export type PaymentType = {
    id: any,
    title: string,
    image: string,
}

const PaymentMethods: PaymentType[] = [
    {
        id: 333,
        title: 'Credit Card',
        image: '/images/payment-png/credit-card.png',
    },
    {
        id: 444,
        title: 'PayPal',
        image: '/images/payment-png/paypal.png',
    },
    {
        id: 555,
        title: 'Apple Pay',
        image: '/images/payment-png/apple-pay.png',
    },
]

export { PaymentMethods }