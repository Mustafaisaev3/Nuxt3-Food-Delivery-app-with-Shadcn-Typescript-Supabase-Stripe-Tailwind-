<template>
    <div class="h-auto w-full flex items-center gap-2 rounded-lg border-[1px] border-[#e2e8f0] p-2">
      <textarea
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :rows="rows"
        v-bind="$attrs"
        class="flex h-full w-full outline-none placeholder:text-[#64748B]" 
      />
    </div>
  </template>
  
  <script setup lang='ts'>
  defineProps(['modelValue', 'rows'])
  </script>
  
  <style>
  
  </style>