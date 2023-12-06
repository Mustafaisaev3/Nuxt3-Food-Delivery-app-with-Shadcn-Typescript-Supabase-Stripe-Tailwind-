<template>
  <div class="w-full h-auto">
    <div class="w-full h-auto grid grid-cols-6 gap-4">
      <!-- User Info -->
      <Card class="col-span-2">
        <CardHeader class="w-full flex flex-col items-center">
          <Avatar size="lg">
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU" alt="@radix-vue" />
            <AvatarFallback>TU</AvatarFallback>
          </Avatar>
          <CardTitle>Test User</CardTitle>
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
                <div class="text-base text-[#003c80]">test@gmail.com</div>
              </div>
            </div>
            <div class="w-full flex gap-2">
              <div class="w-[50px] h-[50px] bg-[#ECF3F2] rounded-full flex items-center justify-center">
                <IconCss name="mdi:phone" class="text-[#0099ff] text-[25px]" />
              </div>
              <div class="pl-2">
                <div class="text-base">Phone No</div>
                <div class="text-base text-[#003c80]">+1-321-456-8756</div>
              </div>
            </div>
            <div class="w-full flex gap-2">
              <div class="w-[50px] h-[50px] bg-[#ECF3F2] rounded-full flex items-center justify-center">
                <IconCss name="mdi:web" class="text-[#ff4800] text-[25px]" />
              </div>
              <div class="pl-2">
                <div class="text-base">Website</div>
                <div class="text-base text-[#003c80]">testuser.com</div>
              </div>
            </div>
            <div class="w-full flex gap-2">
              <div class="w-[50px] h-[50px] bg-[#ECF3F2] rounded-full flex items-center justify-center">
                <IconCss name="mdi:fax" class="text-[#2b2b2b] text-[25px]" />
              </div>
              <div class="pl-2">
                <div class="text-base">Fax</div>
                <div class="text-base text-[#003c80]">23297847</div>
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
      <Card class="col-span-4">
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent class=" flex flex-col gap-6">
          <div class="grid grid-cols-2 gap-4">
            <Input placeholder="Company" />
            <Input placeholder="Username" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <Input placeholder="First name" />
            <Input placeholder="Lust name" />
          </div>
          <div class="grid grid-cols-1">
            <Input placeholder="Address" />
          </div>
          <div class="grid grid-cols-3 gap-4">
            <Input placeholder="City" />
            <Input placeholder="Post code" />
            <Input placeholder="Country" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <Input placeholder="Website" />
            <Input placeholder="Fax" />
          </div>
          <div class="grid grid-cols-1">
            <Textarea placeholder="About me" :rows="5" />
          </div>
          <div class="w-full h-auto flex justify-end">
            <Button variant="blue">Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '~/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import Button from '~/components/ui/button/Button.vue';
import Textarea from '~/components/ui/textarea/Textarea.vue';
</script>

<style>

</style>