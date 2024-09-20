<script lang="ts" setup>

const country = ref('')
const orderState = ref('')

</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">주문조회</h2>
    </div>

    <div class="bg-white rounded-lg mt-6 overflow-hidden">
      <div class="flex items-center">
        <div class="flex items-center flex-1 px-4 gap-4  border-r">
          <Icon name="mdi:search" size="24"></Icon>
          <input type="text" class="flex-1 h-14 outline-none placeholder:text-sm" placeholder="주문번호 뒤 4자리">
        </div>
        <div class="flex items-center flex-[2] px-4 gap-4">
          <Icon name="mdi:search" size="24"></Icon>
          <input type="text" class="flex-1 h-14 outline-none placeholder:text-sm" placeholder="전화번호 뒤 4자리">
        </div>
        <UButton type="button" class="h-10 px-5 mr-2" color="black">검색</UButton>
      </div>
      <div class="p-4 border-t flex items-center gap-3">
        <USelect v-model="country" :options="['전체','서울','부산']" size="md" placeholder="지역선택"></USelect>
        <USelect v-model="orderState" :options="['전체','주문','수거','검수','세탁','결제','출고','배송','완료']" size="md" placeholder="주문상태"></USelect>
      </div>
    </div>

    <div class="bg-white rounded-lg mt-6">
      <div class="h-16 border-b flex items-center justify-between px-5">
        <h4 class="font-semibold">검색된 주문 <b class="text-rose-600">4건</b></h4>
        <!-- <div class="flex items-center gap-3 text-sm">
          <UButton type="button" class="h-8 rounded-md px-4" color="white">버튼1</UButton>
          <UButton type="button" class="h-8 rounded-md px-4" color="white">버튼2</UButton>
        </div> -->
      </div>

      <div class="grid grid-cols-2 gap-4 p-6">
        <CardOrder v-for="item in 4" :key="item"/>
      </div>
    </div>

    <div class="bg-gray-200 rounded-lg p-4 text-center text-gray-500 mt-5 min-h-[300px] flex flex-center">
      주문을 검색해주세요 (전화번호 뒤 4자리 검색)
    </div>
  </div>
</template>

<style lang="scss" scoped></style>