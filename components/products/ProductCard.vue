<template>
    <Card class="w-full max-w-[300px] h-auto overflow-hidden p-2">
        <div class="w-full h-[100px] md:h-[150px] flex items-center justify-center">
            <img 
              src="https://img.freepik.com/photos-premium/isolat-pizza-fond-blanc-ia-generative_74760-2619.jpg" 
              alt="product-img"
              class="object-contane w-auto h-full"
            />
        </div>
        <div class="w-full h-auto flex flex-col items-center pt-2">
            <h2 class="font-semibold text-sm mg:text-lg">Hot Pizza</h2>
            <div class="flex items-center gap-1 pt-1">
                <IconCss name="mdi:star" size="20" class="text-[#ffd900]"/>
                <span class="text-[14px]">4.5</span>
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
</script>

<style>

</style>