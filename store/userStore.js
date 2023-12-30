import { defineStore } from 'pinia'
import { products } from '~/data/products'

export const useUser = defineStore({
    id: 'user-store',

    state: () => {
        return {
            user: {
                firstname: 'Test',
                lustname: 'User',
                username: 'testuser',
                company: 'Tesla',
                address: 'Sidney, 56',
                country: 'Some Country',
                city: 'Sidney',
                postCode: '232323',
                email: 'testuser@gmail.com',
                phone: '+1-321-456-8756',
                website: 'testuser.com',
                fax: '313131',
                aboutMe: 'About Me)',
            },
            wishlist: [],
            loading: false
        }
    },

    actions: {
        setUserData (userData) {
            this.user = userData
        },
        
        addToWishlist (productId) {
            // If product in Wishlist - delete product 
            if (this.wishlist.includes(productId)) {
                const filteredWishlist = this.wishlist.filter(ProductInWishlistId => {
                    return ProductInWishlistId != productId
                })

                return this.wishlist = filteredWishlist
            }

            // Otherwise add product to wishlist 
            this.wishlist.push(productId)
        },

        isProductInWishlist (productId) {
            return !!this.wishlist.includes(productId)
        },

        wishlistProductCount () {
            return this.wishlist.length
        },

        getWishlistProducts () {
            const productsArr = products.filter((product) => {
                if (this.wishlist.includes(product.id)) {
                    return product
                }
            })

            return productsArr
        }
    }
})