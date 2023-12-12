<template>
    <div class="w-full h-auto flex flex-col">
        <h2 class="font-bold">Checkout</h2>
        <div class="flex-1">
            <div v-show="step === STEPS.DELIVERY_OPTIONS" class="pt-4">
              <div class="text-base font-semibold border-b-[1px] border-black/30 py-2">Delivery Options</div>
              <div class="w-full h-full">
                <div class="grid grid-cols-2 gap-2 pt-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Lust Name" />
                </div>
                <div class="grid grid-cols-3 gap-2 pt-4">
                    <Input placeholder="Country" />
                    <Input placeholder="City" />
                    <Input placeholder="ZIP Code" />
                </div>
                <div class="grid grid-cols-6 gap-2 pt-4">
                    <Input placeholder="Street" class=" col-span-4" />
                    <Input placeholder="Appartment" class=" col-span-2" />
                </div>
              </div>
            </div>
            <div v-show="step === STEPS.SHIPPING_METHOD" class="pt-4">
                <div class="text-base font-semibold border-b-[1px] border-black/30 py-2">Shipping Method</div>
                <div class="w-full h-full flex flex-col gap-4 pt-4">
                    <ShippingTab v-for="shipping in ShippingTypes" :key="shipping.id" :shipping="shipping"/>
                </div>
            </div>
            <div v-show="step === STEPS.PAYMENT_METHOD" class="pt-4">
                <div class="text-base font-semibold border-b-[1px] border-black/30 py-2">Payment Method</div>
                <div class="w-full h-full flex justify-center gap-4 pt-4">
                    <PaymentTab v-for="payment in PaymentTypes" :key="payment.id" :payment="payment"/>
                </div>
                <div class="w-full h-full pt-4">
                    <div class="grid grid-cols-1 pt-4">
                        <Input placeholder="Card Number" />
                    </div>
                    <div class="grid grid-cols-2 gap-2 pt-4">
                        <Input placeholder="Exp. date" />
                        <Input placeholder="CVV" />
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-[60px] flex justify-between">
            <div>
                <Button v-if="secondaryActionLabel" @click="onBack">{{ secondaryActionLabel }}</Button>
            </div>
            <Button @click="onNext">{{ actionLabel }}</Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import ShippingTab from '../checkout/ShippingTab.vue'
import PaymentTab from '../checkout/PaymentTab.vue'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()

enum STEPS {
    DELIVERY_OPTIONS = 0,
    SHIPPING_METHOD = 1,
    PAYMENT_METHOD = 2,
}

const ShippingTypes = [
    {
        id: 111,
        title: 'Standart Shipping',
        description: 'by the 5th of June 8:00 - 21:00',
        price: '4.00'
    },
    {
        id: 222,
        title: 'Fast Shipping',
        description: 'Tomorrow the 2th of June 8:00 - 21:00',
        price: '7.59'
    },
]

const PaymentTypes = [
    {
        id: 333,
        title: 'Credit Card',
        image: '/images/payment-png/credit-card.png',
    },
    {
        id: 444,
        title: 'PayPal',
        image: '/images/payment-png/paypal.png',
    },
    {
        id: 555,
        title: 'Apple Pay',
        image: '/images/payment-png/apple-pay.png',
    },
    
]

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
    toast({
        title: 'Scheduled: Catch up',
        description: 'Friday, February 10, 2023 at 5:57 PM',
        variant: 'success'
    });
}

const onBack = () => {
    if (step.value === 0) {
        return
    }
    step.value = step.value - 1
}

const onNext = () => {
    if (step.value === STEPS.PAYMENT_METHOD) {
        checkout()
        return
    }
    step.value = step.value + 1
}


</script>
<style lang="">
    
</style>