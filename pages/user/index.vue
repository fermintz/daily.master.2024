<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold">회원조회</h2>
    </div>

    <div class="bg-white rounded-lg mt-6 overflow-hidden">
      <div class="flex items-center">
        <div class="flex items-center flex-1 px-4 gap-4">
          <Icon name="mdi:search" size="24"></Icon>
          <input type="text" class="flex-1 h-14 outline-none placeholder:text-sm" placeholder="전화번호 뒤4자리 검색">
        </div>
        <UButton type="button" class="h-10 px-5 mr-2" color="black">검색</UButton>
      </div>
      <div class="p-4 border-t flex items-center gap-3">
        <USelect v-model="country" :options="['전체','서울','부산']" size="md" placeholder="지역선택"></USelect>
      </div>
    </div>

    <div class="p-6 bg-white rounded-md grid grid-cols-2 gap-5 mt-6" >
      <div class="border border-gray-300 rounded-md p-5 bg-white hover:border-gray-400 cursor-pointer" v-for="item in 5" :key="item" @click="$router.push('/user/1')">
        <div class="flex items-center gap-5">
          <div class="w-20 h-20 rounded-full bg-blue-600 text-white text-lg flex-center font-semibold">4561</div>
          <div class="flex flex-col">
            <span class="font-semibold">박수민</span>
            <span class="text-sm text-green-600 mt-1">010-8525-4561</span>
            <span class="text-sm text-gray-500 mt-2">부산시 사상구 덕상로 8-37 덕포경동메르빌 201동 2001호</span>
          </div>
        </div>
        <div class="flex items-center gap-2 mt-5">
          <div class="flex flex-col gap-1 flex-1 bg-gray-100 p-3 rounded-md">
            <span class="text-sm text-gray-500">총주문수</span>
            <span class="font-semibold text-sm">12건</span>
          </div>
          <div class="flex flex-col gap-1 flex-1 bg-gray-100 p-3 rounded-md">
            <span class="text-sm text-gray-500">보유쿠폰</span>
            <span class="font-semibold text-sm">1장</span>
          </div>
          <div class="flex flex-col gap-1 flex-1 bg-gray-100 p-3 rounded-md">
            <span class="text-sm text-gray-500">최근주문일</span>
            <span class="font-semibold text-sm">24-09-23</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>