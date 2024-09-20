<script lang="ts" setup>

</script>

<template>
  <div class="p-6 bg-white rounded-md">
    <div class="flex items-center justify-between mb-5">
      <h4>
        <span>결제내역</span>
        <span class="ml-3 text-blue-600">총 2건</span>
      </h4>
    </div>
    <div class="flex flex-col gap-5">
      <div class="col-span-2 p-4 bg-gray-100 rounded-md text-gray-500">등록된 결제정보가 없습니다.</div>
      <div class="col-span-2 p-4 bg-gray-100 rounded-md flex items-center justify-between">
        <span>결제합계</span>
        <span class="font-semibold text-lg">37,000원</span>
      </div>
      <div class="border border-gray-300 p-5 rounded-md flex gap-10" v-for="item in 3" :key="item"> 
        <div class="flex flex-col min-w-[240px]">
          <span class="text-sm">KB국민카드(3551)</span>
          <span class="font-semibold">34,000원</span>
        </div>
        <div class="flex-1 flex flex-col gap-3">
          <div class="flex items-center justify-between bg-gray-100 rounded-md p-4">
            <div class="flex items-center gap-5">
              <span class="text-red-500">취소</span>
              <span class="text-sm">2024-08-23 12:34</span>
            </div>
            <span class="font-semibold">-5,000원</span>
          </div>
          <div class="flex items-center justify-between bg-gray-100 rounded-md p-4">
            <div class="flex items-center gap-5">
              <span class="text-blue-600">결제</span>
              <span class="text-sm">2024-08-21 11:20</span>
            </div>
            <span class="font-semibold">39,000원</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>