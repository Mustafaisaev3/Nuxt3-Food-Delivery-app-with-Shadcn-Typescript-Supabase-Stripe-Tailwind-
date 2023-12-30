<template>
    <div class="w-full h-full flex flex-col lg:flex-row">
        <div class="w-full lg:max-h-[450px] lg:w-1/2 flex items-center justify-center relative">
            <img 
              :src="product.image" 
              alt="product-img"
              class="object-contain w-auto h-full p-2"
            />
            <div class="absolute left-2 top-2 cursor-pointer" @click="addProductToWishlist">
                <IconCss v-if="isProductInWishlistStatus" name="mdi:cards-heart" size='25' class="text-[#e54343]"/>
                <IconCss v-else name="mdi:cards-heart-outline" size='25'/>
            </div>
        </div>
        <div class="w-full lg:max-w-[50%] px-4 flex flex-col">
            <div class="flex-1 pt-2">
                <h2 class="text-2xl font-bold">{{ product.name }}</h2>
                <p class="text-base font-semibold pt-1">Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem</p>
                <div v-if="product.price.salePrice" class="price flex gap-2 pt-2">
                    <div class="text-2xl font-bold">
                        ${{ product.price.salePrice }}
                    </div>
                    <div class="text-base font-bold line-through text-black/50">
                        ${{ product.price.price }}
                    </div>
                </div>
                <div v-else class="price pt2">
                    <div class="text-2xl font-bold">
                        ${{ product.price.price }}
                    </div>
                </div>
                <OptionTabs />
            </div>
            <div class="w-full">
                <Counter @getCount="setProductCount" />
                <div>
                    <Button v-if="!productCount" :variant="'green'" class="w-full" disabled>Add to Cart</Button>
                    <Button v-else :variant="'green'" class="w-full" @click="addProductToCart">Add to Cart</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCart } from '~/store/cartStore'
import Counter from '~/components/shared/Counter.vue'
import Button from '../ui/button/Button.vue';
import OptionTabs from '../shared/OptionTabs.vue';
import { useUser } from '~/store/userStore';

const { addToWishlist, isProductInWishlist } = useUser()
const { addToCart } = useCart()
const { product } = defineProps(['product'])

const productCount = ref(0)

const setProductCount = (count: number) => {
    productCount.value = count
}

const addProductToCart = () => {
    addToCart(product, productCount.value)
}

const addProductToWishlist = () => {
    addToWishlist(product.id)
}

const isProductInWishlistStatus = computed(() => {
    return isProductInWishlist(product.id)
})

</script>

<style>
</style>