<script lang="ts" setup>

</script>

<template>
  <form class="block bg-white p-2 rounded-md">
    <div class="p-4 py-6">
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
    <div class="bg-gray-100 flex items-center justify-end rounded p-3 gap-5 mt-10">
      <p class="text-gray-900 text-sm">자료를 수정하셨다면, 반드시 저장하기 버튼을 클릭해주세요</p>
      <UButton color="blue" class="h-11 px-9 rounded" type="submit">
        <span>저장하기</span>
      </UButton>
    </div>
  </form>
</template>

<style lang="scss" scoped>

</style>