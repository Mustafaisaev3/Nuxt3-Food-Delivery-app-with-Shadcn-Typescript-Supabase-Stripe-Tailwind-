<template>
    <Card class="w-full max-w-[300px] h-auto overflow-hidden p-2">
        <div class="w-full h-[100px] md:h-[150px] rounded-md overflow-hidden flex items-center justify-center">
            <img 
              :src="product.image" 
              alt="product-img"
              class="object-cover w-auto h-full"
            />
        </div>
        <div class="w-full h-auto flex flex-col items-center pt-2">
            <h2 class="font-semibold text-sm mg:text-lg">{{ product.name }}</h2>
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-1 pt-1">
                    <IconCss name="mdi:star" size="20" class="text-[#ffd900]"/>
                    <span class="text-[14px]">{{ product.rating }}</span>
                </div>
                <div class="flex items-center gap-1 pt-1">
                    <span class="text-[14px]">${{ product.price.price }}</span>
                </div>
            </div>
        </div>
        <div class="w-full pt-2 flex items-center gap-3 p-2">
            <div class="cursor-pointer">
                <Dialog>
                    <DialogTrigger as-child>
                        <IconCss name="mdi:fullscreen" size='25'/>
                    </DialogTrigger>
                    <DialogContent class="md:w-auto lg:min-w-[800px] h-full md:h-auto lg:h-[500px] m-0">
                        <ProductView :product="product" />
                    </DialogContent>
                </Dialog>
            </div>
            <Button size="lg" variant="product" class="w-full p-2" @click="addProductToCart">
                Buy
            </Button>
            <div class="cursor-pointer" @click="addProductToWishlist">
                <IconCss v-if="isProductInWishlistStatus" name="mdi:cards-heart" size='25' class="text-[#e54343]"/>
                <IconCss v-else name="mdi:cards-heart-outline" size='25'/>
            </div>
        </div>
    </Card>
</template>

<script setup lang='ts'>
import ProductView from "../modals/ProductView.vue";
import { Button } from "../ui/button";
import { type ProductType } from '~/data/products'
import { Card } from '../ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { storeToRefs } from "pinia";
import { useUi } from "~/store/uiStore";
import { useCart } from "~/store/cartStore";
import { useUser } from "~/store/userStore";

const { addToCart } = useCart()
const { addNotification } = useUi()
const { addToWishlist, isProductInWishlist } = useUser()

interface ProductCardInterface {
    product: ProductType
}

const { product } = defineProps<ProductCardInterface>()
const { products } = storeToRefs(useCart())

const addProductToCart = () => {
    addToCart(product, 1)
    addNotification({type: 'success', message: 'Product added to cart'})
}

const addProductToWishlist = () => {
    addToWishlist(product.id)
}

const isProductInWishlistStatus = computed(() => {
    return isProductInWishlist(product.id)
})


</script>

<style>

</style>