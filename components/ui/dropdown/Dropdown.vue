<template>
    <div class="w-auto h-auto relative">
        <div class="w-auto h-auto py-2 px-4 border rounded-md flex justify-between items-center gap-4 z-20 cursor-pointer bg-white" @click="toggleDropdown">
            {{ title ? title : activeValue.title }}
            <IconCSS name="mdi:chevron-down" class="text-[#999999] text-lg"/>
        </div>
        <Transition name="fade">
            <ul class="dropdown-body w-full h-auto py-2 px-1 border rounded-md absolute top-[110%] left-0 bg-white z-10 overflow-hidden" v-if="toggle">
                <li 
                  v-for="option in options"
                  @click="() => setActiveValue(option)"
                  class="py-1 px-2 cursor-default hover:bg-[#44697a1a] rounded-sm transition-all"
                >
                    {{ option.title }}
                </li>
            </ul>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type OptionType = {
    id: any,
    title: string, 
    value?: any,
    color?: '#2dff2d',
    background?: '#2dff2d42',
}

// Setup Props
const { options, defaultValue, title } = defineProps({
    options: {
        type: Array as PropType<OptionType[]>,
        required: true,
    },
    defaultValue: {
        type: Object as OptionType,
    },
    title: {
        type: String,
    },
})

// Define Emits
const emit = defineEmits(['getValue'])

// Active Value manipulation
const activeValue = ref(defaultValue ? defaultValue : options)
const setActiveValue = (val) => {
    activeValue.value = val
    emit('getValue', val)
    toggleDropdown()
}

// Toggle dropdown functionality
const toggle = ref(false)
const toggleDropdown = () => {
    toggle.value = !toggle.value
}
</script>

<style scoped>
.fade-enter-active {
  animation: fade-in 0.1s;
}
.fade-leave-active {
  animation: fade-in 0.1s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
