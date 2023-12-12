<template>
    <label :for="shipping.id" class="shipping-tab-container w-full flex items-center space-x-2 p-4 border border-[#3d3d3d] rounded-sm cursor-pointer">
        <Checkbox :id="shipping.id" class="shipping-tab" />
        <div
            class="w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex justify-between"
        >
            <div class="flex gap-2">
                <div>{{ shipping.title }}</div>
                <div class="text-[gray]">{{ shipping.description }}</div>
            </div>
            <div>${{ shipping.price }}</div>    
        </div>
  </label>
</template>
<script setup lang="ts">
import { Checkbox } from '../ui/checkbox'

const { shipping } = defineProps(['shipping'])
</script>

<style scoped>
.shipping-tab:checked .shipping-tab-container {
    background-color: red
}
</style>