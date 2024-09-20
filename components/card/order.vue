<script lang="ts" setup>

</script>

<template>
  <!-- 카드시작 -->
  <div 
    class="border border-gray-300 rounded-md p-4 hover:border-gray-900 cursor-pointer" 
    @click="$router.push('/order/1')"
  > 
    <div class="flex items-center mb-4">
      <div class="flex-1 items-center gap-2 flex text-sm">
        <span class="p-2 py-1 rounded-md bg-blue-100 text-blue-600 text-xs">수거</span>
        <span class="p-2 py-1 rounded-md bg-green-600 text-white text-xs">재수거</span>
        <span class="p-2 py-1 rounded-md bg-violet-900 text-white text-xs">주문취소</span>
      </div>
      <div class="flex items-center gap-1 text-sm">
        <span class=" text-gray-500">08.26 (수) <b class="text-rose-600">21:00</b></span>
        <span class="text-gray-300">/</span>
        <span class="text-green-600">2747</span>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="font-semibold">박수민 / 010-8525-<b class="text-blue-600">4561</b></span>
      <span class="text-sm text-neutral-500 mt-2">부산광역시 사상구 덕상로 8-37 덕포경동메르빌 201동 2001호</span>
      <span class="text-sm text-neutral-900 mt-1">워시앤클린 광안점</span>
    </div>
  </div>
  <!-- 카드종료 -->
</template>

<style lang="scss" scoped>

</style>