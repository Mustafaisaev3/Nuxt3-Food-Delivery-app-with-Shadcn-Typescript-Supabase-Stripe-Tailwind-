<template>
    <div class="w-full h-auto">
        <Heading :title="'Orders'">
            <template v-slot:rightContent>
                <div class="flex gap-2">
                <SearchInput placeholder="Order ID"/>
                <!-- Order Status Select-->
                <Select>
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
                </Select>
                <!-- Order Status Select -->
                </div>
            </template>
        </Heading>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-4 gap-y-4">
            <OrderCard v-for="order in orders" :key="order.id" :order="order" />
            <OrderCard v-for="order in orders" :key="order.id" :order="order" />
            <OrderCard v-for="order in orders" :key="order.id" :order="order" />
            <OrderCard v-for="order in orders" :key="order.id" :order="order" />
        </div>
    </div>
</template>
<script setup lang="ts">
import Heading from '~/components/shared/Heading.vue';
import OrderCard from '~/components/orders/OrderCard.vue';
import { orders } from '~/data/orders'
import { OrderStatusTypes } from '~/utils/order-status-types';
import SearchInput from '~/components/SearchInput.vue';

// const OrderStatusTypes = [
//     {
//         id: '1',
//         title: 'new',
//         color: '#2dff2d',
//         background: '#2dff2d42'
//     },
//     {
//         id: '2',
//         title: 'preparation',
//         color: '#e62dff',
//         background: '#e62dff4d',
//     },
//     {
//         id: '3',
//         title: 'delivery',
//         color: '#ffea2d',
//         background: '#e62dff4d',
//     },
//     {
//         id: '4',
//         title: 'done',
//         color: '#2dd5ff',
//         background: '#e62dff4d',
//     },
//     {
//         id: '5',
//         title: 'reject',
//         color: '#ff4d4d',
//         background: '#e62dff4d',
//     },
// ]
</script>
<style>
    
</style>