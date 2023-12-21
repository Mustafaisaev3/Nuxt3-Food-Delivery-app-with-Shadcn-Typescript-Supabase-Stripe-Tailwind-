<template>
  <div class="w-full h-auto">
    <Heading :title="'Products'">
      <template v-slot:rightContent>
        <div class="flex gap-2">
          <!-- Recently Added -->
          <!-- <Select>
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="Recently Added" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">
                  Apple
                </SelectItem>
                <SelectItem value="banana">
                  Banana
                </SelectItem>
                <SelectItem value="blueberry">
                  Blueberry
                </SelectItem>
                <SelectItem value="grapes">
                  Grapes
                </SelectItem>
                <SelectItem value="pineapple">
                  Pineapple
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> -->
          <!-- Recently Added -->
          <!-- Top Rated -->
          <Select v-model="filterProps.sort">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem v-for="action in SortAction" :value="action.id">
                  {{ action.title }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <!-- Top Rated -->
        </div>
      </template>
    </Heading>
    <div class="w-full h-auto pb-[50px]">
      <CategoryTabs @change-active-category="getActiveCatgeory"/>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-2">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'
import Heading from '~/components/shared/Heading.vue'
import CategoryTabs from '~/components/products/CategoryTabs.vue'
import ProductCard from '~/components/products/ProductCard.vue'
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue, 
} from '~/components/ui/select'
import { products } from '~/data/products'
import { categories, type CategoryType } from '~/data/categories'

const activeCategory = ref(categories[0])
const filteredProducts = ref(products)

const filterProps = ref({
  sort: undefined,
  category: activeCategory.value
})

const SortAction =  [
    {
        id: '1', 
        type: 'price',
        reverse: true,
        title: 'Price up'
    },
    {
        id: '2',
        type: 'price',
        reverse: false,
        title: 'Price down'
    },
    {
        id: '3',
        type: 'rating',
        reverse: true,
        title: 'Rating up'
    },
    {
        id: '4',
        type: 'rating',
        reverse: false,
        title: 'Rating down'
    },
  ]


// Get active Category
const getActiveCatgeory = (category: CategoryType) => {
  filterProps.value.category = category
}


// Filter Products by Category
const filterProductsByCategory = (activeCategory: any) => {
  const newFilteredProducts = products.filter((product: any) => {
    if (activeCategory.name == 'all') {
      return products
    }
    return product.category === activeCategory.name
  })
  filteredProducts.value = newFilteredProducts
}

// Sort Function
const SortBy = (field: any, reverse: any, primer: any) => {
  const key = primer ?
    function(x: any) {
      return primer(x[field])
    } :
    function(x: any) {
      return x[field]
    };

  reverse = !reverse ? 1 : -1;

  return function(a: any, b: any) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  }
}

watch(filterProps, (newVal, oldVal) => {
  if (newVal.category || newVal.category.name !== 'all') {
    filterProductsByCategory(newVal.category)
  }

  if (newVal.sort) {
    const targetSortType = SortAction.find(item => item.id == newVal.sort)

    filteredProducts.value = filteredProducts.value.sort(SortBy(targetSortType?.type, targetSortType?.reverse, parseFloat))
  }
}, {deep: true})
</script>

<style>

</style>