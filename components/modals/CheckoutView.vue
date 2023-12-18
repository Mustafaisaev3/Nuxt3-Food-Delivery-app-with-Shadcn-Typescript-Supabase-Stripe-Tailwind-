<template>
    <div class="w-full h-auto flex flex-col">
        <h2 class="font-bold">Checkout</h2>
        <form class="flex-1" @submit.prevent="sunmitForm">
            <div v-show="step === STEPS.DELIVERY_OPTIONS" class="pt-4">
              <div class="text-base font-semibold border-b-[1px] border-black/30 py-2">Delivery Options</div>
              <div class="w-full h-full">
                <div class="grid grid-cols-2 gap-2 pt-4">
                    <Input v-model="formData.firstName" placeholder="First Name" @input="v$.firstName.$touch" :class="{'border-red-600': v$.firstName.$error}" />
                    <Input v-model="formData.lustName" placeholder="Lust Name" @input="v$.lustName.$touch" :class="{'border-red-600': v$.lustName.$error}" />
                </div>
                <div class="grid grid-cols-3 gap-2 pt-4">
                    <Input v-model="formData.country" placeholder="Country" @input="v$.country.$touch" :class="{'border-red-600': v$.country.$error}" />
                    <Input v-model="formData.city" placeholder="City" @input="v$.city.$touch" :class="{'border-red-600': v$.city.$error}" />
                    <Input v-model="formData.zip" placeholder="ZIP Code"  @input="v$.zip.$touch" :class="{'border-red-600': v$.zip.$error}" />
                </div>
                <div class="grid grid-cols-6 gap-2 pt-4">
                    <Input v-model="formData.street" placeholder="Street" @input="v$.street.$touch" class=" col-span-4" :class="{'border-red-600': v$.street.$error}" />
                    <Input v-model="formData.appartment" placeholder="Appartment" @input="v$.appartment.$touch" class=" col-span-2" :class="{'border-red-600': v$.appartment.$error}" />
                </div>
              </div>
            </div>
            <div v-show="step === STEPS.SHIPPING_METHOD" class="pt-4">
                <div class="text-base font-semibold border-b-[1px] border-black/30 py-2">Shipping Method</div>
                <div class="w-full h-full flex flex-col gap-4 pt-4">
                    <ShippingTab v-for="shipping in ShippingMethods" :key="shipping.id" :shipping="shipping" v-model="formData.shippingMethod" :name="'shipping'" :error="v$.shippingMethod.$error"/>
                </div>
            </div>
            <div v-show="step === STEPS.PAYMENT_METHOD" class="pt-4">
                <div class="text-base font-semibold border-b-[1px] border-black/30 py-2">Payment Method</div>
                <div class="w-full h-full flex justify-center gap-4 pt-4">
                    <PaymentTab v-for="payment in PaymentMethods" :key="payment.id" :payment="payment" v-model="formData.paymentMethod" :name="'payment'" :error="v$.paymentMethod.$error" />
                </div>
                <div class="w-full h-full pt-4">
                    <div class="grid grid-cols-1 pt-4">
                        <Input v-model="formData.cardNumber" placeholder="Card Number" @input="v$.cardNumber.$touch" :class="{'border-red-600': v$.cardNumber.$error}"/>
                    </div>
                    <div class="grid grid-cols-2 gap-2 pt-4">
                        <Input v-model="formData.expDate" placeholder="Exp. date" @input="v$.expDate.$touch" :class="{'border-red-600': v$.expDate.$error}" />
                        <Input v-model="formData.cvv" placeholder="CVV" @input="v$.cvv.$touch" :class="{'border-red-600': v$.cvv.$error}" />
                    </div>
                </div>
            </div>
            <!-- <Button type="submit" class="mt-4">Submit Form</Button> -->
        </form>
        <div class="w-full h-[60px] flex justify-between">
            <div>
                <Button v-if="secondaryActionLabel" @click="onBack">{{ secondaryActionLabel }}</Button>
            </div>
            <Button @click="onNext">{{ actionLabel }}</Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { required, email, minLength, helpers } from '@vuelidate/validators';
import { v4 as uuid } from 'uuid'
import { useVuelidate } from '@vuelidate/core';
import { useToast } from '@/components/ui/toast/use-toast'
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import ShippingTab from '../checkout/ShippingTab.vue'
import PaymentTab from '../checkout/PaymentTab.vue'

import { useUi } from '~/store/uiStore'
import { useCart } from '~/store/cartStore'
import { useOrders } from '~/store/orderStore'
import { storeToRefs } from 'pinia';

import { PaymentMethods } from '~/data/payment'
import { ShippingMethods } from '~/data/shipping'
import type { OrderType } from '~/data/orders';
import { OrderStatusTypes } from '~/utils/order-status-types'

const { toast } = useToast()
const { closeCart, addNotification } = useUi()
const { addOrder } = useOrders()
const { clearCart, cartTotal } = useCart()
const { products } = storeToRefs(useCart())

enum STEPS {
    DELIVERY_OPTIONS = 0,
    SHIPPING_METHOD = 1,
    PAYMENT_METHOD = 2,
}

const step = ref<STEPS>(STEPS.DELIVERY_OPTIONS)
const actionLabel = ref<string>('Next')
const secondaryActionLabel = ref<string | undefined>(undefined)

watch(step, () => {
    if (step.value === STEPS.PAYMENT_METHOD) {
        actionLabel.value = 'Checkout'
    } else {
        actionLabel.value = 'Next'
    }

    if (step.value === STEPS.DELIVERY_OPTIONS) {
        secondaryActionLabel.value = undefined
    } else {
        secondaryActionLabel.value = 'Back'
    }

})

const checkout = () => {
    const order: OrderType = {
        id: uuid(),
        products: products.value,
        orderInfo: formData,
        status: OrderStatusTypes[0]
        
    }

    addOrder(order)
    clearCart()
    addNotification({type: 'success', message: 'Order placed'})
}

const onBack = () => {
    if (step.value === 0) {
        return
    }
    step.value = step.value - 1
}

const onNext = () => {
    if (step.value === STEPS.DELIVERY_OPTIONS) {
        v$.value.firstName.$validate()
        v$.value.lustName.$validate()
        v$.value.country.$validate()
        v$.value.city.$validate()
        v$.value.zip.$validate()
        v$.value.street.$validate()
        v$.value.appartment.$validate()

        if (
            v$.value.firstName.$error ||
            v$.value.lustName.$error ||
            v$.value.country.$error ||
            v$.value.city.$error ||
            v$.value.zip.$error ||
            v$.value.street.$error ||
            v$.value.appartment.$error

        ) {
            return
        }
    }

    if (step.value === STEPS.SHIPPING_METHOD) {
        v$.value.shippingMethod.$validate()

        if (v$.value.shippingMethod.$error) {
            return
        }
    }

    if (step.value === STEPS.PAYMENT_METHOD) {
        v$.value.paymentMethod.$validate()
        v$.value.cardNumber.$validate()
        v$.value.expDate.$validate()
        v$.value.cvv.$validate()

        if (
            v$.value.paymentMethod.$error ||
            v$.value.cardNumber.$error ||
            v$.value.expDate.$error ||
            v$.value.cvv.$error 
        ) {
            return
        } else {
            closeCart()
            checkout()
            return
        }
    }
    
    step.value = step.value + 1
}

const formData = reactive({
  firstName: '',
  lustName: '',
  country: '',
  city: '',
  zip: '',
  street: '',
  appartment: '',
  shippingMethod: '',
  paymentMethod: '',
  cardNumber: '',
  expDate: '',
  cvv: '',
  cartTotal: cartTotal(),
});

const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage('The First Name field is required', required),
    },
    lustName: {
      required: helpers.withMessage('The Lust Name field is required', required),
    },
    country: {
      required: helpers.withMessage('The Country field is required', required),
    },
    city: {
      required: helpers.withMessage('The City field is required', required),
    },
    zip: {
      required: helpers.withMessage('The ZIP Code field is required', required),
    },
    street: {
      required: helpers.withMessage('The Street field is required', required),
    },
    appartment: {
      required: helpers.withMessage('The Appartment field is required', required),
    },
    shippingMethod: {
      required: helpers.withMessage('The Appartment field is required', required),
    },
    paymentMethod: {
      required: helpers.withMessage('The Appartment field is required', required),
    },
    cardNumber: {
      required: helpers.withMessage('The Appartment field is required', required),
      minLength: minLength(8)
    },
    expDate: {
      required: helpers.withMessage('The Appartment field is required', required),
    },
    cvv: {
      required: helpers.withMessage('The Appartment field is required', required),
      minLength: minLength(3)
    },
  };
});

console.log(cartTotal(), 'total')

const v$ = useVuelidate(rules, formData);

const sunmitForm = () => {
    
    // console.log(formData)
    // console.log(v$)
}
</script>
<style lang="">
    
</style>