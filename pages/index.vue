<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">주문조회</h2>
      <div class="flex items-center gap-2">
        <input 
          type="text" 
          class="h-10 rounded-md w-[300px] px-3 border border-gray-300" 
          placeholder="전화번호 뒷 4자리로 검색"
        >
        <button type="submit" class="h-10 rounded-md bg-neutral-900 px-5 text-white">검색</button>
      </div>
    </div>

    <div class="bg-white rounded-lg mt-6">
      <div class="h-16 border-b flex items-center justify-between px-5">
        <h4 class="font-semibold">검색된 주문 <b class="text-rose-600">1건</b></h4>
        <!-- <div class="flex items-center gap-3 text-sm">
          <UButton type="button" class="h-8 rounded-md px-4" color="white">버튼1</UButton>
          <UButton type="button" class="h-8 rounded-md px-4" color="white">버튼2</UButton>
        </div> -->
      </div>

      <div class="grid grid-cols-2 gap-4 p-6">
        <ShopOrdersCard />
      </div>
    </div>

    <div class="bg-gray-200 rounded-md p-4 text-center text-gray-500 mt-5 min-h-[300px] flex flex-center">
      주문을 검색해주세요 (전화번호 뒤 4자리 검색)
    </div>
  </div>
</template>

<style lang="scss" scoped></style>