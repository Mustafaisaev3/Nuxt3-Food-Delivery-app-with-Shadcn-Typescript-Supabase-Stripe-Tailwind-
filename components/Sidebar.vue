<template>
  <div class="space-y-4 py-4 flex-col flex items-center h-full bg-[#111016] shadow-sm border-r">
    <div class="w-full h-full py-2 flex flex-col justify-between">
        <div class="flex flex-col flex-1 gap-[30px] ">
            <div class="w-full flex justify-center items-center pb-[20px]">
                <Icon name="mdi:food" size='30' color='white' class="cursor-pointer"/>
            </div>
            <NuxtLink 
              to='/' 
              class="w-full flex justify-center items-center py-2" 
              :class="{'border-l-4 border-[#c7def0]': isRouteActive('/')}"
            >
                <IconCSS name="mdi:home" size='25' color='white' class="text-[white] hover:text-[#e6e6e6]"/>
            </NuxtLink>
            <NuxtLink 
              to='/foods' 
              class="active w-full flex justify-center items-center py-2"
              :class="{'border-l-4 border-[#c7def0]': isRouteActive('/foods')}"
            >
                <IconCSS name="mdi:pizza" size='25' color='white' class="text-[white] hover:text-[#e6e6e6]"/>
            </NuxtLink>
            <NuxtLink 
              to='/orders' 
              class="w-full flex justify-center items-center py-2"
              :class="{'border-l-4 border-[#c7def0]': isRouteActive('/orders')}"
            >
                <IconCSS name="mdi:clipboard-clock" size='25' class="text-[white] hover:text-[#e6e6e6]"/>
            </NuxtLink>
            <NuxtLink 
              to='/user' 
              class="w-full flex justify-center items-center py-2"
              :class="{'border-l-4 border-[#c7def0]': isRouteActive('/user')}"
            >
                <IconCSS name="mdi:account" size='25' color='white' class="text-[white] hover:text-[#e6e6e6]"/>
            </NuxtLink>
            <NuxtLink 
              to='/setting' 
              class="w-full flex justify-center items-center py-2"
              :class="{'border-l-4 border-[#c7def0]': isRouteActive('/setting')}"
            >
                <IconCSS name="mdi:cog" size='25' class="text-[white] hover:text-[#e6e6e6]"/>
            </NuxtLink>
        </div>
        <div class="w-full flex justify-center py-2 cursor-pointer">
            <Icon name="mdi:logout" size='25' color='white'/>
        </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

console.log(route.path)

const isRouteActive = (path) => {
    return route.path == path ? true : false
}

</script>

<style scoped>

</style>