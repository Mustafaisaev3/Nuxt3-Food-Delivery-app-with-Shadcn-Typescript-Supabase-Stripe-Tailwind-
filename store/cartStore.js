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

        deleteFromCart (id) {
            let targetProduct = this.products.find((productItem) => {
                return productItem.id == id
            })

            if (!targetProduct) {
                return
            }
            
            const filteredProductsArr = this.products.filter((productItem) => {
                return productItem.id != id
            })

            this.products = [...filteredProductsArr]
        },

        increaseProductCount (id) {
            // let targetProduct = this.products.find((productItem) => {
            //     return productItem.id == id
            // })

            // if (!targetProduct) {
            //     return
            // }

            // const filteredProductsArr = this.products.filter((productItem) => {
            //     return productItem.id != id
            // })

            // targetProduct.quantity = targetProduct.quantity + 1

            // this.products = [...filteredProductsArr, targetProduct]

            const targetProductIndex = this.products.findIndex((product => product.id == id));

            if (!targetProductIndex) {
                return
            }

            this.products[targetProductIndex].quantity = this.products[targetProductIndex].quantity + 1
        },

        decreaseProductCount (id) {
            // let targetProduct = this.products.find((productItem) => {
            //     return productItem.id == id
            // })

            // if (!targetProduct) {
            //     return
            // }

            // const filteredProductsArr = this.products.filter((productItem) => {
            //     return productItem.id != id
            // })

            // if (targetProduct.quantity <= 1) {
            //     this.products = [...filteredProductsArr]
            // } else {
            //     targetProduct.quantity = targetProduct.quantity - 1
            //     this.products = [...filteredProductsArr, targetProduct]
            // }

            const targetProductIndex = this.products.findIndex((product => product.id == id));

            if (!targetProductIndex) {
                return
            }

            const filteredProductsArr = this.products.filter((productItem) => {
                return productItem.id != id
            })

            if (this.products[targetProductIndex].quantity <= 1) {
                this.products = [...filteredProductsArr]
            } else {
                this.products[targetProductIndex].quantity = this.products[targetProductIndex].quantity - 1
            }
        },

        clearCart () {
            this.products = []
        },

        cartTotal () {
            let total = 0 
            this.products.map((product) => {
                return total += (product.price.salePrice ? (product.price.salePrice * product.quantity) : (product.price.price * product.quantity))
            })
            return total
        },

        cartCount () {
            let total = 0 
            this.products.map((product) => {
                return total += product.quantity
            })
            return total
        }

    }
})