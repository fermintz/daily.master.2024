<script lang="ts" setup>

</script>

<template>
  <div class="bg-white rounded-md  relative border border-gray-300 overflow-hidden">
    <div class="p-6 flex flex-col">
      <span class="absolute right-6 top-6 text-sm bg-blue-50 text-blue-600 rounded-full px-3 min-h-8 flex-center" v-if="true">영업중</span>
      <span class="absolute right-6 top-6 text-sm bg-red-50 text-red-600  rounded-full px-3 min-h-8 flex-center" v-else>영업중단</span>
      <img src="https://picsum.photos/200" class="w-20 h-20 rounded-full object-cover object-center mb-5">
      <div class="flex flex-col gap-1">
        <span class="text-lg font-semibold">워시앤클린 광안점</span>
        <span class="text-gray-500 text-sm">경남 김해시 주촌면 천곡로 26 127-1503</span>
        <span class="text-green-600 text-sm">010-8525-4561</span>
      </div>
    </div>
    <div class="p-4  bg-gray-100">
      <div class="flex items-center text-sm border rounded-md border-gray-300 overflow-hidden bg-white">
        <a class="h-10  flex-1 flex-center hover:bg-gray-100 cursor-pointer border-r" @click="$router.push('/shop/1')">매장설정</a>
        <a class="h-10  flex-1 flex-center hover:bg-gray-100 cursor-pointer border-r" @click="$router.push('/shop/1')">주문목록</a>
        <a class="h-10  flex-1 flex-center hover:bg-gray-100 cursor-pointer" @click="$router.push('/shop/1')">정산내역</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>