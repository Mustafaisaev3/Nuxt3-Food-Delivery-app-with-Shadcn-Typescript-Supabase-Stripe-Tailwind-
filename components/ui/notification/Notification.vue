<template>
    <teleport to="body" >
      <div v-if="uiStore.isNotifications" class="w-[300px] h-auto fixed top-5 right-5 z-[1000]">
          <NotificationItem v-for="notification in notifications" :key="notification" :notification="notification" />
      </div>
    </teleport>
</template>
  
<script setup>
import { useUi } from '~~/store/uiStore'
import NotificationItem from './NotificationItem.vue';

const uiStore = useUi()
const { notifications } = useUi()
  
</script>

<style>

</style>