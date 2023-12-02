<template>
    <Card class="w-full md:max-w-[300px] h-auto overflow-hidden p-2" :style="{background: order.status.background}">
        <CardHeader>
            <div class="flex justify-between">
                <div class="max-w-[100px] text-sm overflow-hidden">№ {{ orderId }}</div>
                <OrderStatusChange />
            </div>
        </CardHeader>
        <CardContent>
            <div class="flex flex-col gap-2 relative rounded-md overflow-hidden">
                <OrderProductItem v-for="product in order.products" :product="product"/>
                <div class="order-shadow w-full h-full absolute top-0 left-0 hover:flex items-center justify-center pb-2 hidden">
                    <Button>
                        SHOW
                    </Button>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <div class="flex justify-between">
                <div class="w-[30px] h-[30px]">
                    <img :src="order.status.icon" alt="status-img" :class="`object-cover text-[${order.status.color}]`">
                </div>
                <div class="w-[30px] h-[30px] rounded-md border border-[black] flex items-center justify-center cursor-pointer">
                    <IconCss name="mdi:information-variant" />
                </div>
            </div>
        </CardFooter>
    </Card>
</template>
<script setup lang="ts">
import { Card, CardHeader, CardFooter } from '../ui/card'
import { Button } from '../ui/button';
import OrderStatusChange from './OrderStatusChange.vue';
import OrderProductItem from './OrderProductItem.vue';
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