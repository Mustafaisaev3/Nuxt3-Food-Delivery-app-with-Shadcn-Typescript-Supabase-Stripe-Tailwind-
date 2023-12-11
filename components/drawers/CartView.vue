<template>
    <div class="w-full h-full flex-1 flex flex-col">
        <div class="w-full h-full flex-1 overflow-y-auto">
            <CartItem v-for="product in products" />
        </div>
        <div class="w-full h-auto py-2">
            <Button class="w-full">Checkout <span class="px-[30px]">|</span>$158</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import CartItem from '~/components/cart/CartItem.vue'
import { products } from '~/data/products'
</script>

<style lang="">
</style>