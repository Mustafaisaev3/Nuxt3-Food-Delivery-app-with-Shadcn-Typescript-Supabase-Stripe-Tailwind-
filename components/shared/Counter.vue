<template>
    <div class="w-full h-auto flex border-[3px] rounded-md border-[#c7def0] my-2">
        <div 
          class="w-[100%] h-auto py-2 px-4 text-3xl bg-[#c7def0] flex items-center justify-center cursor-pointer"
          @click="dec"
        >
            <IconCss name="mdi:minus" />
        </div>
        <div class="w-[300px] text-2xl font-semibold flex items-center justify-center">{{ count }}</div>
        <div 
          class="w-[100%] h-auto py-2 px-4 text-3xl bg-[#c7def0] flex items-center justify-center cursor-pointer"
          @click="inc"
        >
            <IconCss name="mdi:plus" />
        </div>
    </div>
</template>
<script setup lg="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['getCount'])

const count = ref(0)

const inc = () => {
    count.value = count.value + 1
}

const dec = () => {
    if(count.value == 0) {
        return
    }

    count.value = count.value - 1
}

watch(count, () => {
    emit('getCount', count.value)
})

</script>
<style>
    
</style>