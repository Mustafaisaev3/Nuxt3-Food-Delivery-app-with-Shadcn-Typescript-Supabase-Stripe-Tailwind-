<template>
    <div class="w-full h-auto flex gap-4 py-4">
        <span v-for="option in options">
            <div 
              class="w-[40px] h-[40px] rounded-md text-white text-xl font-bold flex items-center justify-center bg-green-500 hover:bg-green-600 cursor-pointer"
              :class="{'bg-green-600': activeOption == option.title}"
              @click="activeOption = option.title"
            >
              {{ option.title }}
            </div>
        </span>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const options = ref([
    {
        id: 1,
        title: 'S',
    },
    {
        id: 2,
        title: 'M',
    },
    {
        id: 3,
        title: 'L',
    },
])

const activeOption = ref(options.value[0].title)
</script>
<style lang="">
    
</style>