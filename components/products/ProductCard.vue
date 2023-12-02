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
                    <span class="text-[14px]">${{ product.price }}</span>
                </div>
            </div>
        </div>
        <div class="w-full pt-2 flex items-center gap-3 p-2">
            <div class="cursor-pointer">
                <IconCss name="mdi:fullscreen" size='25'/>
            </div>
            <Button size="lg" variant="product" class="w-full">
                Buy
            </Button>
            <div class="cursor-pointer">
                <IconCss name="mdi:cards-heart" size='25' class="text-[#e54343]"/>
            </div>
        </div>
    </Card>
</template>

<script setup lang='ts'>
import { Button } from "../ui/button";
import { type ProductType } from '~/data/products'
import { Card } from '../ui/card'

interface ProductCardInterface {
    product: ProductType
}

const { product } = defineProps<ProductCardInterface>()
</script>

<style>

</style>