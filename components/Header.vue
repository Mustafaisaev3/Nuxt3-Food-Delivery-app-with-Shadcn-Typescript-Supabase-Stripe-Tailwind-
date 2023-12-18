<template>
  <div class="bg-white w-full h-[100px] border-b-[1px] border-[#e2e8f0] p-10 flex items-center justify-between">
    <div class="text-[20px] font-bold">Header</div>
    <div class="flex items-center gap-6">
        <SearchInput placeholder="Search"/>
        <div class="flex gap-4">
            <IconCSS name="mdi:bell" size='25' class="text-[#111016]" />
            <IconCSS name="mdi:cog" size='25' class="text-[#111016]"/>
            <Sheet :open="showCart">
              <SheetTrigger as-child>
                <div class="relative">
                  <IconCSS name="mdi:cart-outline" size='25' class="text-[#111016] cursor-pointer" @click="openCart"/>
                  <Badge v-if="cartCount()" class="w-[15px] h-[15px] absolute -top-[5px] -right-[5px] text-[10px] flex items-center justify-center bg-green-500">{{ cartCount() }}</Badge>
                </div>
              </SheetTrigger>
              <SheetContent class="flex flex-col">
                <SheetHeader>
                  <SheetTitle class="flex justify-between">
                    <div>Cart</div>
                    <div class="border-[1px] hover:border-[2px] border-[#464646] rounded-md w-6 h-6 flex items-center justify-center cursor-pointer" @click="closeCart" >
                      <IconCss name="mdi:close" class="text-sm" />
                    </div>
                  </SheetTitle>
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
import { Badge } from '@/components/ui/badge'
import CartView from '~/components/drawers/CartView.vue'
import { useUi } from '~/store/uiStore'
import { useCart } from '~/store/cartStore'
import { storeToRefs } from 'pinia';

const { openCart, closeCart } = useUi()
const { cartCount } = useCart()
const { showCart } = storeToRefs(useUi())

</script>

<style>

</style>