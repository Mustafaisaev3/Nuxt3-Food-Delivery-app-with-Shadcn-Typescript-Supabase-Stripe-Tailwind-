<template>
  <div 
    class="w-auto h-[100px] rounded-[35px] p-2 cursor-pointer"
    :class="{'bg-[#fffac7]': active}"
  >
    <div 
      class="w-[45px] h-[45px] p-2 rounded-full border-[1px] border-[#e2e8f0] flex items-center justify-center"
      :class="{'bg-[#f0ebb3] border-none': active}"
    >
        <img 
            :src="icon" 
            alt=""
            class=" flex items-center justify-center object-contane"
        >
    </div>
    <div class="text-sm font-semibold w-full flex justify-center pt-2 capitalize">
        {{ name }}
    </div> 
  </div>
</template>

<script setup lang='ts'>
interface CategoryTabProps {
  name: string;
  icon: string;
  active?: boolean
}
defineProps<CategoryTabProps>();
</script>

<style>

</style>