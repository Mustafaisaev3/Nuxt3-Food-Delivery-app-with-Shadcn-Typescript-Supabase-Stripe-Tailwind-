<template>
    <div class="w-full h-full flex-1 flex flex-col">
        <div v-if="!products.length" class="w-full h-full flex items-center justify-center">
            <div class="w-full h-auto">
                <img src="/images/empty-wishlist.jpg" alt="" class="w-full h-full object-cover">
            </div>
            <!-- Empty Cart -->
        </div>
        <div v-else class="w-full h-full flex-1 overflow-y-auto">
            <WishlistItem v-for="product in products" :product="product" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import WishlistItem from '~/components/WishlistItem.vue'
import { useUser } from '~/store/userStore'
import { storeToRefs } from 'pinia';

const { getWishlistProducts } = useUser()

const products = computed(() => {
    return getWishlistProducts()
})


</script>

<style lang="">
</style>