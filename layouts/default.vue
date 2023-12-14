<template>
  <div class="w-full relative">
    <div class="hidden h-full md:flex md:w-[100px] md:flex-col md:fixed md:inset-y-0 z-80 ">
        <!-- Sidebar -->
        <Sidebar />
    </div>
    <main class="h-full md:pl-[100px] pb-10">
        <!-- Header -->
        <Header />
        <div class="p-5 md:p-10">
          <slot />
        </div>
    </main>
    <Notification />
  </div>
</template>

<script setup lang='ts'>
import Sidebar from "~/components/Sidebar.vue";
import Header from "~/components/Header.vue";
import Notification from "~/components/ui/notification/Notification.vue";


</script>

<style>

</style>