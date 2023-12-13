<template>
    <div class="h-10 w-auto flex items-center gap-2 rounded-md border-[1px] border-[#e2e8f0] px-4">
      <input 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="flex h-full w-full rounded-md outline-none text-sm" 
      />
    </div>
  </template>
  
  <script setup lang='ts'>
  defineProps(['modelValue'])
  </script>
  
  <style>
  
  </style>