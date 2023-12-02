<template>
  <div class="w-full h-auto flex gap-4">
    <CategoryTab 
      v-for="category in categories" 
      :key="category.id" 
      :icon="category.icon" 
      :name="category.name"
      :active="activeCategory.id == category.id"
      @click="() => selectCategory(category)"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'
import { categories, type CategoryType } from '~/data/categories'
import CategoryTab from "./CategoryTab.vue";

const emit = defineEmits(['changeActiveCategory'])

const activeCategory = ref<CategoryType>(categories[0])
const selectCategory = (category: CategoryType) => {
    console.log(category)
    activeCategory.value = category
}


// Watch to change Active Category and emit it

watch(activeCategory, (newVal, oldVal) => {
  emit('changeActiveCategory', newVal)
})

</script>

<style>

</style>