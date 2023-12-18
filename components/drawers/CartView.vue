<template>
    <div class="w-full h-full flex-1 flex flex-col">
        <div v-if="!products.length" class="w-full h-full flex items-center justify-center">
            <div class="w-full h-auto">
                <img src="/images/empty-cart.png" alt="" class="w-full h-full object-cover">
            </div>
            <!-- Empty Cart -->
        </div>
        <div v-else class="w-full h-full flex-1 overflow-y-auto">
            <CartItem v-for="product in products" :product="product" />
        </div>
        <div class="w-full h-auto py-2">
            <Dialog>
                <DialogTrigger as-child>
                    <Button class="w-full" type="submit" :disabled="!products.length">Checkout <span class="px-[30px]">|</span>${{ cartTotal() }}</Button>
                </DialogTrigger>
                <DialogContent class="md:w-auto lg:min-w-[500px] h-full md:h-auto lg:h-[500px] m-0">
                    <CheckoutView />
                </DialogContent>
            </Dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'


import Button from '../ui/button/Button.vue';
import CartItem from '~/components/cart/CartItem.vue'
import CheckoutView from '~/components/modals/CheckoutView.vue'
// import { products } from '~/data/products'
import { useCart } from '~/store/cartStore'
import { storeToRefs } from 'pinia';

const { cartTotal } = useCart()
const { products } = storeToRefs(useCart())


</script>

<style lang="">
</style>