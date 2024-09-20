<script lang="ts" setup>
const active = ref('주문조회')
const menu = ref([
  {
    name:'주문정보',
    second:[
      {
        name:'주문조회',
        route:'/'
      }
    ]
  },
  {
    name:'매장관리',
    second:[
      {
        name:'매장목록',
        route:'/shop'
      },
      {
        name:'매장등록',
        route:'/shop/created'
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
    name:'회원관리',
    second:[
      {
        name:'회원검색',
        route:'/user'
      },
    ]
  }
])
</script>

<template> 
  <div class="fixed top-0 left-0 w-full h-full bg-gray-100 pl-[240px] overflow-y-auto">
    <div class="fixed left-0 top-0 p-2 min-w-[240px] h-full">
      <div class=" bg-white h-full border rounded-xl drop-shadow-[5px_5px_15px_rgba(0,0,0,0.05)]">
        <div class="h-[160px] flex-center">
          <img src="~/assets/img/daily.svg" class="h-14">
        </div>
        <div class="flex flex-col gap-10">
          <dl class="flex flex-col gap-5" v-for="items in menu" :key="items.name">
            <dt class="text-xs text-neutral-500 px-4">{{items.name}}</dt>
            <dd class="flex flex-col gap-5">
              <NuxtLink :to="item.route"
                v-for="item in items.second" :key="item.name"
                @click="active = item.name"
                class="overflow-hidden px-5 flex-v-center leading-none cursor-pointer relative after:absolute after:-left-2 after:w-[3px] after:h-4 after:rounded-full after:bg-blue-600" 
                :class="[active === item.name ? 'bg-blue-50 text-blue-600 py-4 font-semibold after:left-2' : 'hover:font-semibold']"
              >
                {{ item.name }}
              </NuxtLink>
            </dd>
          </dl>

        </div>
      </div>
    </div>
   
    <div class="w-full h-full px-6">
      <div class="w-full mx-auto py-10 max-w-[1280px] pb-20">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>