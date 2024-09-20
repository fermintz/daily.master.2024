<script lang="ts" setup>

</script>

<template>

  <div class="p-6  bg-white rounded-md">
    <div class="flex items-center justify-between mb-5">
      <h4>
        <span>등록된 세탁물</span>
        <span class="ml-3 text-blue-600">총 4건</span>
      </h4>
    </div>
    
    <div class="grid grid-cols-2 gap-5">
      <div class="col-span-2 p-4 bg-gray-100 rounded-md text-gray-500">등록된 세탁물이 없습니다.</div>
      <div class="flex  gap-5 p-4 border border-gray-300 rounded-md" v-for="item in 7" :key="item">
        <div class="flex flex-col flex-1">
          <span>티셔츠</span>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            상의 / 9,800원 
          </div>
        </div>
        <div class="font-semibold flex-center">9,000원</div>
        <div class="bg-gray-100 rounded-md flex-center px-3">
          <span class="font-semibold text-blue-600">1</span>
          <span class="text-xs text-gray-500">개</span>
        </div>
      </div>
    </div>

    <div class="p-4 bg-gray-100 rounded-md flex items-center justify-between mt-5">
      <span>상품합계</span>
      <span class="font-semibold text-lg">37,000원</span>
    </div>
  </div>


 
</template>

<style lang="scss" scoped>

</style>