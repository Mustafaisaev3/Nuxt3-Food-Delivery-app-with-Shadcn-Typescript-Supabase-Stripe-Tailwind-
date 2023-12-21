<template>
    <div class="flex items-center mb-8" :class="`${headingClass}`">
      <slot name="leftContent"></slot>
      <div v-if="icon" :class="`p-2 w-fit rounded-md ${bgColor}`">
        <Icon :name="icon" :class="`w-10 h-10 ${iconColor}`" />
      </div>
      <div class="flex-1">
        <h2 class="text-lg md:text-2xl font-bold">{{ title }}</h2>
      </div>
      <div v-if="link && linkText">
        <NuxtLink :to="link">
          <div class="text-sm text-[#3a8ada]">
            {{linkText}}
          </div>
        </NuxtLink>
      </div>
      <slot name="rightContent"></slot>
    </div>
</template>
  
<script setup lang="ts">
interface HeadingProps {
  title: string;
  icon?: string;
  iconColor?: string;
  bgColor?: string;
  link?: string;
  linkText?: string;
  headingClass?: string;
}
defineProps<HeadingProps>();
</script>