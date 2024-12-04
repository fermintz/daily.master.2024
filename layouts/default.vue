<script lang="ts" setup>
const active = ref('주문조회')
const menu = ref([
  {
    name:'데이터조회',
    second:[
      {
        name:'주문조회',
        route:'/'
      },
      {
        name:'회원조회',
        route:'/user'
      },
    ]
  },
  {
    name:'매장관리',
    second:[
      {
        name:'매장목록',
        route:'/shop'
      },
      // {
      //   name:'매장 등록하기',
      //   route:'/shop/created'
      // },
      {
        name:'파트너관리',
        route:'/shop/partners'
      }
    ]
  },
  {
    name:'매출정보',
    second:[
      {
        name:'정산관리',
        route:'/calculate'
      },
    ]
  },
  {
    name:'입점관리',
    second:[
      {
        name:'1.입점신청',
        route:'/shop'
      },
      {
        name:'2.입점준비',
        route:'/shop'
      },
      {
        name:'3.오픈대기',
        route:'/shop'
      },
    ]
  },


])
</script>

<template> 
  <div class="fixed top-0 left-0 w-full h-full bg-gray-100 flex flex-col  overflow-y-auto">
    <div class="flex items-center justify-between h-20 px-8">
      <div class="flex-center gap-3">
        <img src="~/assets/img/daily.svg" class="h-10">
        <div class="flex flex-col">
          <span class="text-lg font-semibold leading-none">데일리세탁</span>
          <span class="text-[12px] text-blue-600 leading-none mt-[6px]">마스터 관리자</span>
        </div>      
      </div>
      <div>
        <button class="bg-gray-200 rounded-full py-2 px-4 text-xs">로그아웃</button>
      </div>
    </div>

    <div class="flex">
      <div class="min-w-[240px] h-full">
        <div class="flex flex-col gap-8">
          <dl class="flex flex-col gap-5" v-for="items in menu" :key="items.name">
            <dt class="text-xs text-neutral-500 px-4">{{items.name}}</dt>
            <dd class="flex flex-col gap-4">
              <NuxtLink :to="item.route"
                v-for="item in items.second" :key="item.name"
                @click="active = item.name"
                class="overflow-hidden px-5 flex-v-center leading-none cursor-pointer relative" 
                :class="[active === item.name ? ' text-blue-600 font-semibold' : 'hover:font-semibold']"
              >
                {{ item.name }}
              </NuxtLink>
            </dd>
          </dl>
        </div>
      </div>
      
      <div class="w-full h-full px-6">
        <div class="w-full mx-auto py-10 max-w-[1200px] pb-20">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>