<template>
    <div class="w-full h-auto border-b-[1px] border-[#a5a5a5] py-4 flex items-center gap-3 pr-2">
        <div class="image-container w-[80px] h-[80px] rounded-md p-2 relative">
            <img :src="product.image" alt="" class="w-full h-full object-contain">
            <div class="delete-item absolute left-0 top-0 w-full h-full bg-[#00000059] rounded-md cursor-pointer hidden" @click="deleteProductFromCart">
                <IconCSS name="mdi:close-circle" class="text-2xl text-white" />
            </div>
        </div>
        <div class="flex-1">
            <h2 class="text-[#262626] text-xl font-semibold uppercase">{{ product.name }}</h2>
            <div class="text-[gray] text-base">Unit price: ${{ productPrice }} </div>
            <div class="w-full flex justify-between items-center">
                <CartCounter :quantity="product.quantity" :id="product.id"/>
                <div class="font-semibold">${{ totalPrice }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import CartCounter from './CartCounter.vue'
import { useCart } from "~/store/cartStore";

const { product } = defineProps(['product'])

const productPrice = computed(() => {
    return product.price.salePrice ? product.price.salePrice : product.price.price
})

const totalPrice = computed(() => {
    return (productPrice.value * product.quantity).toFixed(2)
})

const { deleteFromCart } = useCart()
const deleteProductFromCart = () => {
    deleteFromCart(product.id)
}

</script>
<style scoped>
    .image-container:hover .delete-item {
        display: flex;
        align-items: center;
        justify-content: center
    }
</style>