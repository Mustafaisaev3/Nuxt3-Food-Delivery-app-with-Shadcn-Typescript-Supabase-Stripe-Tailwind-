<template>
    <div class="w-full h-full flex items-center justify-center relative">
        <img 
          src="/images/login-bg.jpg" 
          alt="bg"
          class="w-full h-full absolute top-0 left-0 object-cover"
        >
        <div class="w-full sm:w-[400px] h-full sm:h-auto bg-white sm:rounded-lg p-[30px] z-10 flex items-center justify-center sm:block">
            <div class="w-full h-full flex flex-col items-center justify-center">
                <div class="w-full h-auto flex flex-col justify-center items-center gap-2">
                    <IconCss name="mdi:food" class="cursor-pointer text-[#363636] text-[50px] mb-5"/>
                    <div class="text-[#363636] text-2xl font-bold">Login</div>
                    <div class="text-[#363636] text-base font-semibold">Get the fastest food delivery</div>
                </div>
                <div class="w-full h-auto pt-[30px] sm:pt-[50px]">
                    <div class="w-full flex flex-col gap-4">
                        <Input placeholder="Email" v-model="email" />
                        <Input placeholder="Password" v-model="password" type="password"/>
                    </div>
                    <div class="w-full h-auto pt-[30px]">
                        <Button class="w-full">Login</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '~/components/ui/Input.vue'
import Button from '~/components/ui/button/Button.vue';

definePageMeta({
  layout: 'auth'
})

const email = ref('testuser@gmail.com')
const password = ref('testuser123')

</script>

<style>
</style>