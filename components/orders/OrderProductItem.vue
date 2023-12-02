<template >
    <div class="w-full h-[60px] bg-white rounded-md flex items-center gap-2 p-2">
        <div class="w-[40px] h-[40px] flex items-center justify-center">
            <img :src="product.image" class="object-cover" />
        </div>
        <div class="w-full flex justify-between">
            <div class="font-semibold text-[14px]">{{ product.name }}</div> 
            <div class="font-bold text-[14px]">${{ product.price }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { product } = defineProps(['product'])
</script>
<style lang="">
    
</style>