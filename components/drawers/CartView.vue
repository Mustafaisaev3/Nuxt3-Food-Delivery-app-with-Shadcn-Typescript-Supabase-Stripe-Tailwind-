<template>
    <div class="w-full h-full flex-1 flex flex-col">
        <div class="w-full h-full flex-1 overflow-y-auto">
            <CartItem v-for="product in products" />
        </div>
        <div class="w-full h-auto py-2">
            <Dialog>
                <DialogTrigger as-child>
                    <Button class="w-full" type="submit">Checkout <span class="px-[30px]">|</span>$158</Button>
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
import { products } from '~/data/products'

</script>

<style lang="">
</style>