<script lang="ts" setup>
const orderState = ref('예정')
</script>

<template>
  <div class="">
    <div class="p-1 gap-1 bg-gray-900 rounded-md flex items-center mb-4">
      <a 
        class="h-9 flex items-center justify-between flex-1 px-3 rounded cursor-pointer" 
        :class="[orderState === item ? 'bg-white text-gray-900 font-semibold' : 'bg-gray-700 text-gray-300 hover:bg-gray-600']"
        v-for="item in ['예정','주문','수거','검수','세탁','결제','출고','배송','완료'].filter((item)=> item !== '완료')"
        @click="orderState = item"
      >
        <span class="text-sm">{{ item }}</span>
        <span class="font-semibold">12</span>
      </a>
      <a 
        class="h-9 flex items-center justify-center flex-1 px-3 rounded cursor-pointer" 
        :class="[orderState === item ? 'bg-white text-gray-900 font-semibold' : 'bg-gray-700 text-gray-300 hover:bg-gray-600']"
        v-for="item in ['예정','주문','수거','검수','세탁','결제','출고','배송','최근작업'].filter((item)=> item === '최근작업')"
        @click="orderState = item"
      >
        <span class="text-sm">{{ item }}</span>
      </a>

    </div>

    <div class="flex flex-col bg-white rounded-md">
      <div class="grid grid-cols-2 gap-4 p-6">
        <ShopOrdersCard v-for="item in 10" :key="item"/>
      </div>
    </div>
  
  </div>
</template>

<style lang="scss" scoped>

</style>