<template>
    <Card class="w-full md:max-w-[300px] h-auto overflow-hidden p-2 flex flex-col" :style="{background: order.status.background}">
        <CardHeader>
            <div class="flex justify-between">
                <div class="max-w-[100px] text-sm overflow-hidden">№ {{ orderId }}</div>
                <OrderStatusChange :order="order" />
            </div>
        </CardHeader>
        <CardContent class=" flex-1">
            <div class="flex flex-col gap-2 relative rounded-md overflow-hidden">
                <OrderProductItem v-for="product in order.products" :product="product"/>
            </div>
        </CardContent>
        <CardFooter>
            <div class="flex justify-between">
                <div class="w-[30px] h-[30px]">
                    <img :src="order.status.icon" alt="status-img" :class="`object-cover text-[${order.status.color}]`">
                </div>
                <Dialog >
                    <DialogTrigger as-child>
                        <div class="w-[30px] h-[30px] rounded-md border border-[black] flex items-center justify-center cursor-pointer">
                            <IconCss name="mdi:information-variant" />
                        </div>
                    </DialogTrigger>
                    <DialogContent class="md:w-auto lg:min-w-[800px] h-full md:h-auto lg:h-[500px] m-0 p-0 border-none" >
                        <OrderInfoView :order="order" :style="{background: order.status.background}"/>
                    </DialogContent>
                </Dialog>
            </div>
        </CardFooter>
    </Card>
</template>
<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader
} from '@/components/ui/dialog'
import { Card, CardHeader, CardFooter } from '../ui/card'
import { Button } from '../ui/button';
import OrderStatusChange from './OrderStatusChange.vue';
import OrderProductItem from './OrderProductItem.vue';
import OrderInfoView from '../modals/OrderInfoView.vue';
const { order } = defineProps(['order'])

const orderId = computed(() => {
    return order.id.slice(0,8)
})

</script>

<style scoped> 
.order-shadow {
    /* background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.4) 70%); */
    background: rgba(0, 0, 0, 0.34);
}
</style>