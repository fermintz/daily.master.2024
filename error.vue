<script lang="ts" setup>

</script>

<template>
  <div class="fixed w-full h-full left-0 top-0 flex items-center justify-center">
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center gap-4">
        <img src="~/assets/img/daily.svg" class="h-10">
        <span class="text-gray-500">데일리세탁</span>
      </div>
      <span class="text-[150px] font-extralight">404 Error</span>
      <span class="text-gray-500">페이지를 찾을 수 없습니다.</span>
      <NuxtLink class="h-10 flex-center bg-gray-100 rounded-full px-5 mt-20" to="/">
        <span>메인으로 돌아가기</span>
      </NuxtLink>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

</style>