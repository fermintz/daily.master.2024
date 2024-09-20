<script lang="ts" setup>

</script>

<template>
  <div class="border border-gray-300 rounded-md p-6 flex gap-6" >
    <div class="flex-1 flex flex-col">
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-5">
          <span class="font-semibold">데이데이 세탁소</span>
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
      <div class="flex-1 flex items-center gap-10">
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
      <span class="text-gray-900 font-semibold text-xl">미정산</span>
      <UButton class="mt-3">완료하기</UButton>
    </div>
  </div> <!-- 카드 -->
</template>

<style lang="scss" scoped>

</style>