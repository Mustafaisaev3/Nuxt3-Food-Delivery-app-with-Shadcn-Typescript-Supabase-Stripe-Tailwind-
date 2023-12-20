<template>
  <div class="w-full h-auto">
    <div class="w-full h-auto flex flex-col md:grid md:grid-cols-5 gap-4">
      <!-- User Info -->
      <Card class="col-span-2">
        <CardHeader class="w-full flex flex-col items-center">
          <Avatar size="lg">
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU" alt="@radix-vue" />
            <AvatarFallback>TU</AvatarFallback>
          </Avatar>
          <CardTitle>{{ userForm.firstname }} {{ userForm.lustname }}</CardTitle>
          <CardDescription class="text-lg">Main Admin</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="w-full h-auto flex flex-col gap-3">
            <div class="w-full flex gap-2">
              <div class="w-[50px] h-[50px] bg-[#ECF3F2] rounded-full flex items-center justify-center">
                <IconCss name="mdi:email" class="text-[#008075] text-[25px]" />
              </div>
              <div class="pl-2">
                <div class="text-base">Email</div>
                <div class="text-base text-[#003c80]">{{ userForm.email }}</div>
              </div>
            </div>
            <div class="w-full flex gap-2">
              <div class="w-[50px] h-[50px] bg-[#ECF3F2] rounded-full flex items-center justify-center">
                <IconCss name="mdi:phone" class="text-[#0099ff] text-[25px]" />
              </div>
              <div class="pl-2">
                <div class="text-base">Phone No</div>
                <div class="text-base text-[#003c80]">{{ userForm.phone }}</div>
              </div>
            </div>
            <div class="w-full flex gap-2">
              <div class="w-[50px] h-[50px] bg-[#ECF3F2] rounded-full flex items-center justify-center">
                <IconCss name="mdi:web" class="text-[#ff4800] text-[25px]" />
              </div>
              <div class="pl-2">
                <div class="text-base">Website</div>
                <div class="text-base text-[#003c80]">{{ userForm.website }}</div>
              </div>
            </div>
            <div class="w-full flex gap-2">
              <div class="w-[50px] h-[50px] bg-[#ECF3F2] rounded-full flex items-center justify-center">
                <IconCss name="mdi:fax" class="text-[#2b2b2b] text-[25px]" />
              </div>
              <div class="pl-2">
                <div class="text-base">Fax</div>
                <div class="text-base text-[#003c80]">{{ userForm.fax }}</div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter class="w-full h-auto flex justify-between gap-4 py-4">
          <Button variant="blue" class="flex gap-2 items-center">
            <IconCss name="mdi:message-outline" class="text-[18px]"/>
            Message
          </Button>
          <Button variant="green" class="flex gap-2 items-center">
            <IconCss name="mdi:account-supervisor-outline" class="text-[18px]"/>
            Follow
          </Button>
        </CardFooter>
      </Card>

      <!-- User Profile Setting -->
      <Card class="col-span-3">
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent class=" flex flex-col gap-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Company" v-model="userForm.company" />
            <Input placeholder="Username" v-model="userForm.username"/>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="First name" v-model="userForm.firstname"/>
            <Input placeholder="Lust name" v-model="userForm.lustname"/>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-1">
            <Input placeholder="Address" v-model="userForm.address"/>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="City" v-model="userForm.city"/>
            <Input placeholder="Post code" v-model="userForm.postCode"/>
            <Input placeholder="Country" v-model="userForm.country"/>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Email" v-model="userForm.email"/>
            <Input placeholder="Phone" v-model="userForm.phone"/>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Website" v-model="userForm.website"/>
            <Input placeholder="Fax" v-model="userForm.fax"/>
          </div>
          <div class="grid grid-cols-1">
            <Textarea placeholder="About me" :rows="5" v-model="userForm.aboutMe"/>
          </div>
          <div class="w-full h-auto flex justify-end">
            <Button variant="blue" @click="changeUserData">Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '~/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import Button from '~/components/ui/button/Button.vue';
import Textarea from '~/components/ui/textarea/Textarea.vue';
import { useUser } from '~/store/userStore';
import { storeToRefs } from 'pinia';

const { setUserData } = useUser()
const { user } = storeToRefs(useUser())

let userForm = reactive(user)

const changeUserData = () => {
  setUserData(userForm.value)
}
</script>

<style>

</style>