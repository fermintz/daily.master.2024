<script lang="ts" setup>
const tab = ref('미정산')
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">정산관리</h2>
    </div>

    <div class="bg-white rounded-lg mt-6 overflow-hidden">
      <div class="flex items-center">
        <div class="flex items-center flex-1 px-4 gap-4">
          <Icon name="mdi:search" size="24"></Icon>
          <input type="text" class="flex-1 h-14 outline-none placeholder:text-sm" placeholder="매장명 검색">
        </div>
        <UButton type="button" class="h-10 px-5 mr-2" color="black">검색</UButton>
      </div>
      <div class="p-4 border-t flex items-center gap-3">
        <USelect v-model="country" :options="['전체','서울','부산']" size="md" placeholder="지역선택"></USelect>
      </div>
    </div>
    
    <div class="p-6 flex flex-col gap-5 bg-white rounded-md mt-6" >
      <div class="border border-gray-300 rounded-md p-6 flex gap-6" v-for="item in 3" :key="item">
        <div class="flex-1 flex flex-col">
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-5">
              <span class="font-semibold">워시앤클린 광안점</span>
              <span class="text-green-600 text-sm">070-8187-8780</span>
            </div>
            <span class="text-gray-500 text-sm">부산광역시 사상구 덕상로 8-37 덕포경동메르빌 201동 2001호</span>
          </div>
          <div class="flex items-center gap-10 bg-gray-100 rounded p-3 my-5">
            <div class="text-sm flex items-center gap-2">
              <span class="text-gray-500 text-xs">정산기준일</span>
              <span class="font-semibold">2024-08-01 ~ 2024.08-15</span>
            </div>
            <div class="text-sm flex items-center gap-2">
              <span class="text-gray-500 text-xs">결제건수</span>
              <span class="font-semibold">32건</span>
            </div>
          </div>
          <div class="flex-1 flex items-center gap-8">
            <dl class="flex flex-col gap-1">
              <dt class="text-xs text-gray-500">실정산액</dt>
              <dd class="text-lg font-semibold text-blue-600">1,232,900원</dd>
            </dl>
            <Icon name="mdi:equal-box" size="24" class="text-blue-600"></Icon>
            <dl class="flex flex-col gap-1">
              <dt class="text-xs text-gray-500">매출액(누적결제액)</dt>
              <dd class="text-lg font-semibold">1,448,900원</dd>
            </dl>
            <Icon name="mdi:plus-box" size="24" class="text-gray-300"></Icon>
            <dl class="flex flex-col gap-1">
              <dt class="text-xs text-gray-500">본사마케팅</dt>
              <dd class="text-lg font-semibold">-58,000원</dd>
            </dl>
            <Icon name="mdi:plus-box" size="24" class="text-gray-300"></Icon>
            <dl class="flex flex-col gap-1">
              <dt class="text-xs text-gray-500">서비스이용료</dt>
              <dd class="text-lg font-semibold">-158,000원</dd>
            </dl>
          </div>
        </div>
        <div class="flex-col gap-1 bg-gray-100 p-5 min-w-[140px] rounded flex-center">
          <span class="text-xs text-gray-500">정산상태</span>
          <span class="text-blue-600 font-semibold text-xl">정산완료</span>
          <span class="text-xs mt-3 text-gray-500">24.08.14 12:34</span>
        </div>
      </div> <!-- 카드 -->
    </div>
   

  </div>
</template>

<style lang="scss" scoped>

</style>