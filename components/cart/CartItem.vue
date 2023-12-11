<template>
    <div class="w-full h-auto border-b-[1px] border-[#a5a5a5] py-4 flex items-center gap-3 pr-2">
        <div class="image-container w-[80px] h-[80px] rounded-md p-2 relative">
            <img src="https://instafood.com.ua/images/full_shop_product_pc/instafood-2023-04-028-644a7cbba473a.png?1682603542" alt="" class="w-full h-full object-cover">
            <div class="delete-item absolute left-0 top-0 w-full h-full bg-[#00000059] rounded-md cursor-pointer hidden">
                <IconCSS name="mdi:close-circle" class="text-2xl text-white" />
            </div>
        </div>
        <div class="flex-1">
            <h2 class="text-[#262626] text-xl font-semibold uppercase">Pizza</h2>
            <div class="text-[gray] text-base">Unit price: $8.96</div>
            <div class="w-full flex justify-between items-center">
                <CartCounter />
                <div class="font-semibold">168$</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import CartCounter from './CartCounter.vue'
const { product } = defineProps(['product'])
</script>
<style scoped>
    .image-container:hover .delete-item {
        display: flex;
        align-items: center;
        justify-content: center
    }
</style>