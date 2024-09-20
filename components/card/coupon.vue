<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="flex flex-col gap-1 border rounded-md p-2">
      <div class="p-4 flex flex-col">
        <div class="flex flex-col gap-1">
          <span class="">신규회원 할인</span>
          <span class="text-xl font-bold">5,000원</span>
        </div>
        <div class="h-px bg-gray-300 my-4"></div>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between text-sm" v-if="true">
            <span class="text-gray-500">다운로드 개시기간</span>
            <span>2024-09-01 ~ 2024-09-12</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500">사용가능 수거예약기간</span>
            <span>2024-09-01 ~ 2024-09-31</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between bg-gray-100 p-3 rounded gap-2">
        <span class="text-sm text-gray-500">쿠폰번호: A03950691</span>
        <UButton color="gray" size="md">쿠폰삭제</UButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>