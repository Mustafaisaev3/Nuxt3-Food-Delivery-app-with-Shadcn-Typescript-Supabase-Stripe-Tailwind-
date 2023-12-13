<template>
    <label 
      :for="shipping.id" 
      class="shipping-tab-container w-full flex items-center space-x-2 p-4 border rounded-sm cursor-pointer"
      :class="{'border-[red]': error, 'border-[#3d3d3d]': !error}"
    >
        <input 
            :id="shipping.id"
            :value="shipping.id"
            v-model="model"
            v-bind="$attrs"
            type="radio"
            class="flex rounded-md outline-none text-sm" 
        />
        <div
            class="w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex justify-between"
        >
            <div class="flex gap-2">
                <div>{{ shipping.title }}</div>
                <div class="text-[gray]">{{ shipping.description }}</div>
            </div>
            <div>${{ shipping.price }}</div>    
        </div>
  </label>
</template>
<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue'

const { shipping, modelValue, error } = defineProps(['shipping', 'modelValue', 'error'])

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

</script>

<style scoped>
.shipping-tab:checked .shipping-tab-container {
    background-color: red
}
</style>