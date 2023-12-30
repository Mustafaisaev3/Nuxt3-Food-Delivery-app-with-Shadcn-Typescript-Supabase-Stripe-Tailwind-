<template>
  <div class="bg-white w-full h-[80px] md:h-[100px] border-b-[1px] border-[#e2e8f0] p-10 flex items-center justify-between">
    <div>   
      <div class="hidden md:block">
        <SearchInput placeholder="Search" />
      </div> 
      <div class="block md:hidden cursor-pointer">
        <Sheet :open="showMobileMenu">
          <SheetTrigger as-child>
            <div class="relative">
              <IconCSS name="mdi:menu" size='25' class="text-[#111016] hover:text-[#111016a9]" @click="openMobileMenu"/>
            </div>
          </SheetTrigger>
          <SheetContent :side="'left'" class="flex flex-col">
            <SheetHeader>
              <SheetTitle class="flex justify-between">
                <div>Menu</div>
                <div class="border-[1px] hover:border-[2px] border-[#464646] rounded-md w-6 h-6 flex items-center justify-center cursor-pointer" @click="closeMobileMenu" >
                  <IconCss name="mdi:close" class="text-sm" />
                </div>
              </SheetTitle>
            </SheetHeader>
            <MobileMenu />
          </SheetContent>
        </Sheet>
      </div>    
    </div>
    <div class="block md:hidden">
      <IconCSS name="mdi:food" size='40' class="text-[#111016]" />
    </div>
    <div class="flex items-center gap-6">
        <div class="flex gap-4">
            <div class="hidden md:block">
              <IconCSS name="mdi:bell-outline" size='25' class="text-[#111016] hover:text-[#111016a9]" />
            </div>
            <Sheet>
              <SheetTrigger as-child>
                <div class="relative">
                  <IconCSS name="mdi:cards-heart-outline" size='25' class="text-[#111016] hover:text-[#111016a9] hidden"/>
                  <Badge v-if="wishlistProductCount()" class="w-[15px] h-[15px] absolute -top-[5px] -right-[5px] text-[10px] flex items-center justify-center bg-[#e54343]">{{ wishlistProductCount() }}</Badge>
                </div>
              </SheetTrigger>
              <SheetContent class="flex flex-col">
                <WishlistView />
                <SheetClose asChild>
                  <Button type="submit">Close Wishlist</Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
            <Sheet :open="showCart">
              <SheetTrigger as-child>
                <div class="relative">
                  <IconCSS name="mdi:cart-outline" size='25' class="text-[#111016] hover:text-[#111016a9] cursor-pointer" @click="openCart"/>
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
        <div class="hidden md:block">
          <UserDropdown class="w-full" />
        </div>
    </div>
  </div>
</template>

<script setup>
import SearchInput from '~/components/SearchInput.vue'
import UserDropdown from '~/components/UserDropdown.vue'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import CartView from '~/components/drawers/CartView.vue'
import WishlistView from '~/components/drawers/WishlistView.vue'
import MobileMenu from './drawers/MobileMenu.vue'
import { useUi } from '~/store/uiStore'
import { useCart } from '~/store/cartStore'
import { useUser } from '~/store/userStore'
import { storeToRefs } from 'pinia';

const { openCart, closeCart, openMobileMenu, closeMobileMenu } = useUi()
const { cartCount } = useCart()
const { wishlistProductCount } = useUser()
const { showCart, showMobileMenu } = storeToRefs(useUi())


</script>

<style>

</style>