import { defineStore } from 'pinia'

export const useCart = defineStore({
    id: 'cart-store',

    state: () => {
        return {
            products: [],
            loading: false
        }
    },

    getters: {
        productsCount () {
            return this.products.length
        },
    },

    actions: {
        addToCart (product, quantity) {
            if(this.products.length > 0) {
                const filteredProductsArr = this.products.filter((productItem) => {
                    return productItem.id != product.id
                })

                let targetProduct = this.products.find((productItem) => {
                    return productItem.id == product.id
                })

                if (targetProduct) {
                    targetProduct.quantity = targetProduct.quantity + quantity
                    this.products = [...filteredProductsArr, targetProduct]
                } else {
                    product.quantity = quantity
                    this.products = [...filteredProductsArr, {...product, quantity}]
                }
                
            } else {
                this.products.push({...product, quantity})
            }
        },

    }
})