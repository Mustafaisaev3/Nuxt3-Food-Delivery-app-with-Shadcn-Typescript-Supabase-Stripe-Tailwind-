<template>
  <div 
    class="w-full h-[50px] border rounded bg-white mb-2 overflow-hidden"
    :class="{
        'border-[#0ab39c]': notification.type == 'success',
        'border-[#f06548]': notification.type == 'error',
        'border-[#fbc25e]': notification.type == 'warning',
    }"
  >
    <div 
      class="w-full h-full p-2 border-b-[3px] flex items-center justify-between"
      :class="{
        'border-[#0ab39c]': notification.type == 'success',
        'border-[#f06548]': notification.type == 'error',
        'border-[#fbc25e]': notification.type == 'warning',
      }"
    >
        <div>{{ notification.message }}</div>
        <div class="cursor-pointer">
            <IconCss name="mdi:close" @click="() => deleteNotificationById(notification.id)" />
        </div>
    </div>  
  </div>
</template>

<script setup>
  import { useUi } from '~~/store/uiStore';
  const { notification } = defineProps(['notification'])

  const { deleteNotificationById } = useUi()
</script>

<style>

</style>