<template>
    <div class="w-full h-full pt-4">
        <div class="w-full h-full flex flex-col gap-5">
            <UserDropdown class="w-full"/>
            <div class="w-full h-auto flex flex-col gap-2">
                <NuxtLink 
                    to='/' 
                    class="w-full flex justify-left items-center py-2 gap-2 hover:bg-[#80808028] rounded-md px-2" 
                    @click="closeMobileMenu"
                >
                    <IconCSS name="mdi:home" size='25' color='white' class="text-[#111016] hover:text-[#111016a9]"/>
                    Home
                </NuxtLink>
                <NuxtLink 
                    to='/foods' 
                    class="active w-full flex justify-left items-center py-2 gap-2 hover:bg-[#80808028] rounded-md px-2"
                    @click="closeMobileMenu"
                >
                    <IconCSS name="mdi:pizza" size='25' color='white' class="text-[#111016] hover:text-[#111016a9]"/>
                    Foods
                </NuxtLink>
                <NuxtLink 
                    to='/orders' 
                    class="w-full flex justify-left items-center py-2 gap-2 hover:bg-[#80808028] rounded-md px-2"
                    @click="closeMobileMenu"
                >
                    <IconCSS name="mdi:clipboard-clock" size='25' class="text-[#111016] hover:text-[#111016a9]"/>
                    Orders
                </NuxtLink>
                <NuxtLink 
                    to='/user' 
                    class="w-full flex justify-left items-center py-2 gap-2 hover:bg-[#80808028] rounded-md px-2"
                    @click="closeMobileMenu"
                >
                    <IconCSS name="mdi:account" size='25' color='white' class="text-[#111016] hover:text-[#111016a9]"/>
                    User Info
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserDropdown from '~/components/UserDropdown.vue'
import { useUi } from '~/store/uiStore'

const { closeMobileMenu } = useUi()

</script>

<style lang="">
</style>