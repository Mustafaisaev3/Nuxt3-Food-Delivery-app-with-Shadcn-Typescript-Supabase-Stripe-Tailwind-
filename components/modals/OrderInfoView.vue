<template>
    <div class="w-full h-full p-6 flex flex-col">
        <div class="font-bold text-lg pb-4">Order: {{ order.id }}</div>
        <div class="w-full h-auto flex-1 grid grid-cols-3 gap-3">
            <div class="w-full h-full col-span-1 flex flex-col gap-2">
                <OrderProductItem v-for="product in order.products" :key="product.id" :product="product" />
            </div>
            <div class="w-full col-span-2 bg-white rounded-md p-4">
                <div class="w-full h-auto grid grid-cols-2 gap-5">
                    <div class="w-full h-auto">
                        <h2 class="font-bold">User info</h2>
                        <div class="pt-1 flex items-center gap-2">
                            {{ order.orderInfo.firstName }} {{ order.orderInfo.lustName }}
                        </div>
                    </div>
                    <div class="w-full h-auto">
                        <h2 class="font-bold">Payment</h2>
                        <div class="pt-1 flex items-center gap-2">
                            Card: {{ order.orderInfo.cardNumber }} <img :src="getPaymentMethod" alt="" class="w-5 h-5">
                        </div>
                    </div>
                    <div class="w-full h-auto">
                        <h2 class="font-bold">Address</h2>
                        <div class="pt-1 flex flex-col">
                            <div>{{ order.orderInfo.street }}, {{ order.orderInfo.appartment }}</div>
                            <div>{{ order.orderInfo.country }}, {{ order.orderInfo.city }}</div>
                            <div>ZIP: {{ order.orderInfo.zip }}</div>
                        </div>
                    </div>
                    <div class="w-full h-auto">
                        <h2 class="font-bold">Order</h2>
                        <div class="pt-1 flex flex-col">
                            <div>{{ getShippingMethods?.title }} - ${{ getShippingMethods?.price }}</div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[1px] bg-gray-800 my-4"></div>
                <div class="w-full flex justify-end">
                    <div class="w-auto h-auto ">
                        <div class="pt-1 flex align-bottom gap-4">
                            <div>Total: </div><div class="font-bold text-lg">${{ order.orderInfo.cartTotal }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-[60px] flex justify-between pt-4">
            <Button variant="red">
                <IconCss name="mdi:delete" class="text-white" />
            </Button>
            <Dropdown 
                :defaultValue="order.status" 
                :options="OrderStatusTypes"
                @getValue="(val) => changeOrderStatus(order.id, val)"
            />
            <!-- <Select @update:model-value="orderStatus">
                <SelectTrigger class="w-[180px]">
                    <SelectValue placeholder="Order Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem 
                            v-for="status in OrderStatusTypes" 
                            :value="status.id" 
                            :style="{border: `1px solid ${status.color}`}"
                            class="mb-1"
                        >
                            <div class="text-[#e62dff4d]" :style="{color: status.color}">{{ status.title }}</div>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import OrderProductItem from '../orders/OrderProductItem.vue';
import Button from '../ui/button/Button.vue';
import Dropdown from '../ui/dropdown/Dropdown.vue'
import { PaymentMethods } from '~/data/payment'
import { ShippingMethods } from '~/data/shipping'
import { useOrders } from '~/store/orderStore'

const { changeOrderStatus } = useOrders()

const { order } = defineProps(['order'])

const getPaymentMethod = computed(() => {
    return PaymentMethods.find(payment => payment.id === order.orderInfo.paymentMethod)?.image
})

const getAddress = computed(() => {
    return PaymentMethods.find(payment => payment.id === order.orderInfo.paymentMethod)?.image
})
const getShippingMethods = computed(() => {
    return ShippingMethods.find(shipping => shipping.id === order.orderInfo.shippingMethod)
})

const orderStatus = ref()
watch(orderStatus, (val) => {
    console.log(val, 'change')
})
// console.log(orderStatus)


</script>

<style>
    
</style>