<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
      <Toaster />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>
