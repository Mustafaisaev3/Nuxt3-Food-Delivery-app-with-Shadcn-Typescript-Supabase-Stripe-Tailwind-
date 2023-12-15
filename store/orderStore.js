import { defineStore } from 'pinia'
import { orders } from '~/data/orders'

export const useOrders = defineStore({
    id: 'order-store',

    state: () => {
        return {
            orders,
            loading: false
        }
    },

    getters: {
        ordersCount () {
            return this.orders.length
        },
    },

    actions: {
        addOrder (order) {
            this.orders.push(order)
        },

        deleteOrder (id) {
            const filteredOrdersArr = this.orders.filter((orderItem) => {
                return orderItem.id != id
            })

            this.orders = [...filteredOrdersArr]
        },

    }
})