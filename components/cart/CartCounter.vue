<template>
    <div class="w-[100px] h-auto flex rounded-md bg-[#c7def0] my-2">
        <div 
          class="w-[100%] h-auto py-2 px-2 text-base flex items-center justify-center cursor-pointer"
          @click="dec"
        >
            <IconCss name="mdi:minus" />
        </div>
        <div class="w-auto px-2 text-base font-semibold flex items-center justify-center">{{ count }}</div>
        <div 
          class="w-[100%] h-auto py-2 px-2 text-base flex items-center justify-center cursor-pointer"
          @click="inc"
        >
            <IconCss name="mdi:plus" />
        </div>
    </div>
</template>
<script setup lg="ts">
import { ref, watch } from 'vue'
import { useCart } from '~/store/cartStore'

const { increaseProductCount, decreaseProductCount } = useCart()

const { quantity, id } = defineProps(['quantity', 'id'])
const emit = defineEmits(['getCount'])

const count = ref(quantity ? quantity : 0)

const inc = () => {
    increaseProductCount(id)
    count.value = count.value + 1
}

const dec = () => {
    if(count.value == 0) {
        return
    }

    decreaseProductCount(id)
    count.value = count.value - 1
}

watch(count, () => {
    emit('getCount', count.value)
})

</script>
<style>
    
</style>