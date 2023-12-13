<template>
    <label 
      :for="payment.id" 
      class="shipping-tab-container w-full flex items-center space-x-2 p-4 border rounded-sm cursor-pointer"
      :class="{'border-[red]': error, 'border-[#3d3d3d]': !error}"
    >
        <input 
            :id="payment.id"
            :value="payment.id"
            v-model="model"
            v-bind="$attrs"
            type="radio"
            class="flex rounded-md outline-none text-sm" 
        />
        <div
            class="w-[50px] h-[50px] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex justify-between"
        >
            <img :src="payment.image" alt="payment" class="w-full h-full object-cover" />
        </div>
  </label>
</template>
<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue'

const { payment, modelValue, error } = defineProps(['payment', 'modelValue', 'error'])

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

<!-- <template>
    <label :for="payment.id" class="payment-tab-container w-auto h-auto flex items-center space-x-2 p-4 border border-[#3d3d3d] rounded-sm cursor-pointer">
        <Checkbox :id="payment.id" class="payment-tab" />
        <div
            class="w-[50px] h-[50px] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex justify-between"
        >
            <img :src="payment.image" alt="payment" class="w-full h-full object-cover" />
        </div>
  </label>
</template>
<script setup lang="ts">
import { Checkbox } from '../ui/checkbox'

const { payment } = defineProps(['payment'])
</script>

<style scoped>
.shipping-tab:checked .shipping-tab-container {
    background-color: red
}
</style> -->