<template>
  <div class="h-[40px] w-auto flex items-center gap-2 rounded-xl border-[1px] border-[#e2e8f0] px-2">
    <IconCSS name="mdi:magnify" size='25' class="text-[#b7b7b7]" />
    <input 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      class="flex h-full w-full rounded-md outline-none" 
    />
  </div>
</template>

<script setup lang='ts'>
defineProps(['modelValue'])
</script>

<style>

</style>