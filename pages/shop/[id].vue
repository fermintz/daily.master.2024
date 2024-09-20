<script lang="ts" setup>
const tabs = ref('매장설정')
const tabs2 = ref('가맹정보')
const shop =ref(false)
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <UButton class="w-10 h-10 rounded-full" color="black" @click="$router.go(-1)">
          <Icon name="mdi:arrow-left" size="20"></Icon>
        </UButton>
        <h2 class="text-2xl font-bold">워시앤클린 광안점</h2>
      </div>
      <div class="flex items-center">
        <div class="flex items-center gap-3 border border-gray-300 rounded-md h-10 px-3">
          <span class="text-sm" v-if="shop">운영중</span>
          <span class="text-sm" v-else>운영중단</span>
          <UToggle
            on-icon="i-heroicons-check-20-solid"
            off-icon="i-heroicons-x-mark-20-solid"
            v-model="shop"
          />
        </div>
      </div>
    </div>
    <div class="rounded-t-md flex items-center mb-4 relative z-0">
      <a 
        v-for="item in ['매장설정','주문목록','정산내역']" 
        class="text-lg font-semibold cursor-pointer h-14 flex-v-center px-10 relative"
        @click="tabs = item"
        :class="[tabs === item ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900 ']"
      >
        <span>{{item}}</span>
        <span 
          class="absolute z-10 w-full h-1 bg-blue-600 left-1/2 -translate-x-1/2 bottom-0 rounded-full tab-animation"
          :class="[tabs === item ? 'bg-blue-600 block' : 'hidden']"
        ></span>
      </a>
      <span class="h-1 bg-gray-300 absolute bottom-0 left- w-full z-0 rounded-full"></span>
    </div>

    <div class="" v-if="tabs === '매장설정'">
      <div class="p-1 gap-1 bg-gray-900 rounded-md flex items-center mb-4">
        <a 
          v-for="item in ['가맹정보','매장정보','주문규칙','상품설정','서비스구역','휴무일관리','쿠폰관리','매장가격표']"
          class="h-9 rounded flex-center px-3 text-sm cursor-pointer "
          :class="[tabs2 === item ? 'bg-white font-semibold hover:bg-white': ' text-gray-400 hover:bg-gray-700 hover:text-gray-100']"
          @click="tabs2 = item"
        >
          {{ item }}
        </a>
      </div>
      <ShopInfo v-if="tabs2 === '가맹정보'"/>
      <ShopIntro v-if="tabs2 === '매장정보'"/>
      <ShopRules v-if="tabs2 === '주문규칙'"/>
      <ShopProductView v-if="tabs2 === '상품설정'"/>
      <ShopHolyday v-if="tabs2 === '휴무일관리'"/>
      <ShopCoupons v-if="tabs2 === '쿠폰관리'"/>
      <ShopCoverageView v-if="tabs2 === '서비스구역'"/>
      <ShopPrice v-if="tabs2 === '매장가격표'"/>
    </div> <!-- 매장설정 -->

    <ShopOrders v-if="tabs === '주문목록'"/>
    <ShopCalc v-if="tabs === '정산내역'"/>

  </div>
</template>

<style lang="scss" scoped>

</style>