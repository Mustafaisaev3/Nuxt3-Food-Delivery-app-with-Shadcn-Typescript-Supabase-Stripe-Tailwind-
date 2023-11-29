<template>
  <div class="space-y-4 py-4 flex-col flex items-center h-full bg-[#111016] shadow-sm border-r">
    <div class="h-full px-3 py-2 flex flex-col justify-between">
        <div class="flex flex-col flex-1 gap-[30px] ">
            <div class="pb-[20px]">
                <Icon name="mdi:align-vertical-distribute" size='25' color='white'/>
            </div>
            <NuxtLink to='/'>
                <IconCSS name="mdi:home" size='25' color='white' class="text-[white] hover:text-[#e6e6e6]"/>
            </NuxtLink>
            <NuxtLink to='/pizza'>
                <IconCSS name="mdi:pizza" size='25' color='white' class="text-[white] hover:text-[#e6e6e6]"/>
            </NuxtLink>
            <NuxtLink to='/user'>
                <IconCSS name="mdi:account" size='25' color='white' class="text-[white] hover:text-[#e6e6e6]"/>
            </NuxtLink>
            <NuxtLink to='/orders'>
                <IconCSS name="mdi:clipboard-clock" size='25' class="text-[white] hover:text-[#e6e6e6]"/>
            </NuxtLink>
        </div>
        <div>
            <Icon name="mdi:logout" size='25' color='white'/>
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>