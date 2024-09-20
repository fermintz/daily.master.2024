<script lang="ts" setup>
const tabs = ref('고객정보')
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <UButton class="w-10 h-10 rounded-full" color="black" @click="$router.go(-1)">
          <Icon name="mdi:arrow-left" size="20"></Icon>
        </UButton>
        <h2 class="text-2xl font-bold">고객 상세정보 - <b class="text-blue-600">4561</b></h2>
      </div>
      <div class="flex items-center gap-1 p-1 bg-gray-200 rounded-md">

      </div>
    </div>

    <div class="h-11 px-1 gap-1 bg-gray-900 rounded-md flex items-center mb-4">
      <a v-for="item in ['고객정보','주문내역','쿠폰목록']" class="h-9 rounded flex-center px-3 text-sm cursor-pointer "
        :class="[tabs === item ? 'bg-white font-semibold hover:bg-white': ' text-gray-400 hover:bg-gray-700 hover:text-gray-100']"
        @click="tabs = item">
        {{ item }}
      </a>
    </div>

    <UserInfo v-if="tabs === '고객정보'"/>
    <UserOrders v-if="tabs === '주문내역'"/>
    <UserCoupons v-if="tabs === '쿠폰목록'"/>
  </div>
</template>

<style lang="scss" scoped>

</style>