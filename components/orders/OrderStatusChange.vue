<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
        <div class="w-[30px] h-[30px] flex items-center justify-center border border-[black] rounded-full">
            <IconCss name="mdi:dots-vertical" class="text-sm" />
        </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Status</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem v-for="status in OrderStatusTypes" @click="() => changeOrderStatus(order.id, status)">{{ status.title }}</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { OrderStatusTypes } from '~/utils/order-status-types';
import { useOrders } from '~/store/orderStore'

const { order } = defineProps(['order'])
const { changeOrderStatus } = useOrders()
</script>
