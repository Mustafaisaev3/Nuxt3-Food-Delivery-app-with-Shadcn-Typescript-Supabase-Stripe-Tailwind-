<template>
  <div class="w-full relative">
    <div class="hidden h-full md:flex md:w-[100px] md:flex-col md:fixed md:inset-y-0 z-80">
        <!-- Sidebar -->
        <Sidebar />
    </div>
    <main class="h-full pl-[100px] pb-10">
        <!-- Header -->
        <Header />
        <slot />
    </main>
  </div>
</template>

<script setup lang='ts'>
import Sidebar from "~/components/Sidebar.vue";
import Header from "~/components/Header.vue";


</script>

<style>

</style>