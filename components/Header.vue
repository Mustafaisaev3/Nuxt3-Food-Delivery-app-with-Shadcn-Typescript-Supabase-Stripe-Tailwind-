<template>
  <div class="bg-white w-full h-[100px] border-b-[1px] border-[#e2e8f0] p-10 flex items-center justify-between">
    <div class="text-[20px] font-bold">Header</div>
    <div class="flex items-center gap-6">
        <SearchInput placeholder="Search"/>
        <div class="flex gap-4">
            <IconCSS name="mdi:bell" size='25' class="text-[#111016]" />
            <IconCSS name="mdi:cog" size='25' class="text-[#111016]"/>
            <Sheet>
              <SheetTrigger as-child>
                <IconCSS name="mdi:cart-outline" size='25' class="text-[#111016] cursor-pointer"/>
              </SheetTrigger>
              <SheetContent class="flex flex-col">
                <SheetHeader>
                  <SheetTitle>Cart</SheetTitle>
                </SheetHeader>
                <CartView />
              </SheetContent>
            </Sheet>
        </div>
        <UserDropdown />
    </div>
  </div>
</template>

<script setup>
import SearchInput from '~/components/SearchInput.vue'
import UserDropdown from '~/components/UserDropdown.vue'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import CartView from '~/components/drawers/CartView.vue'
</script>

<style>

</style>