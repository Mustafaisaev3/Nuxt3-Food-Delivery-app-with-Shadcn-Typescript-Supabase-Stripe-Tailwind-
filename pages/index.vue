<template>
  <div class="w-auto h-auto">
    <!-- Banners -->
    <div class="w-full h-[250px] md:h-[300px] flex gap-2">
        <div class="w-full h-full rounded-xl overflow-hidden cursor-pointer">
            <img :src="banners[0]" alt="" class="w-full h-full object-cover">
        </div>
        <div class="w-full h-full rounded-xl overflow-hidden cursor-pointer hidden md:block">
            <img :src="banners[1]" alt="" class="w-full h-full object-cover">
        </div>
    </div>
    <!-- Banners -->
    <Heading 
      :title="'Best Sellers'" 
      :link="'/'" 
      :linkText="'View all'"
      :class="'mt-5'"
    />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-3">
      <ProductCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Heading from '~/components/shared/Heading.vue'
import ProductCard from '~/components/products/ProductCard.vue' 
import { products } from '~/data/products.ts'

const banners = [
    'https://img.pikbest.com/origin/06/08/44/49wpIkbEsTbsB.png!w700wp',
    'https://t3.ftcdn.net/jpg/02/94/30/58/360_F_294305823_s0im8kOSQz3VGl3HXcfyXbShNxFFRtzA.jpg',
]
</script>

<style scoped>

</style>