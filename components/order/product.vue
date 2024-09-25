<script lang="ts" setup>

</script>

<template>

  <div class=" bg-white rounded-md flex">
    <div class="flex flex-col flex-1 p-6">
      <div class="flex items-center justify-between mb-5">
        <span>등록된 세탁물</span>
        <span class="ml-3 text-blue-600">총 4개</span>
      </div>
      <div class="flex flex-col gap-3">
        <div class="col-span-2 p-4 bg-gray-100 rounded-md text-gray-500">등록된 세탁물이 없습니다.</div>
        <div class="flex gap-5 p-4 border border-gray-300 rounded-md" v-for="item in 7" :key="item">
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
      
    <div class="flex flex-col min-w-[340px] p-6 border-l">
      <div class="flex items-center mb-5">
        <span>사진메모 <b class="text-sm text-rose-600 font-normal">(최대20장)</b></span>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div class="after:pb-[100%] content-[''] after:block overflow-hidden relative rounded-md border" v-for="item in 10" :key="item">
          <img src="https://picsum.photos/400/720" class="absolute w-full h-full object-cover object-center left-0 top-0 z-20">
        </div>
      </div>
    </div> 
  </div>

 
</template>

<style lang="scss" scoped>

</style>