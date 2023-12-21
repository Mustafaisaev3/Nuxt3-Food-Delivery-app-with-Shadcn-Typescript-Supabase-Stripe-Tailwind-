<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="w-[180px] h-12 flex gap-1 justify-between items-center px-2 rounded-xl border-[1px] border-[#e2e8f0]" :class="$attrs.class">
      <Avatar >
        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU" alt="@radix-vue" />
        <AvatarFallback>TU</AvatarFallback>
      </Avatar>
      <DropdownMenuLabel>Test User</DropdownMenuLabel>
      <ChevronDown class="w-4 h-4 opacity-50" />
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-[180px]">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Log Out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang='ts'>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronDown } from 'lucide-vue-next'

</script>

<style>

</style>