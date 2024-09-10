<script lang="ts" setup>


const price = Math.floor(Math.random() * 10000)

</script>

<template>
  <div class="border flex-v-center p-3 gap-5 rounded-md border-gray-300 bg-white justify-between">
    <div class="w-10 h-10  flex-center handle cursor-pointer hover:bg-neutral-100 rounded-md text-gray-400">
      <Icon name="mdi:drag" size="24"></Icon>
    </div>
    <div class="flex gap-4 items-center border-gray-300 has-[:focus]:border-gray-900 flex-[2]">
      <span class="text-xs text-gray-500 min-w-14">상품명</span>
      <input type="text" class="border-0 h-10 outline-none w-full bg-transparent" value="명품 반팔티" placeholder="상품명을 입력해주세요">
    </div>
    <div class="flex gap-4 items-center border-gray-300 has-[:focus]:border-gray-900 flex-1">
      <span class="text-xs text-gray-500 min-w-14">상품가격</span>
      <input type="text" class="border-0 h-10 outline-none w-full  bg-transparent" :value="price" placeholder="상품가격을 입력해주세요">
    </div>
    <UButton class="w-9 h-9 flex-centerrounded-md" color="gray">
      <Icon name="mdi:close" size="24" class="text-gray-900"></Icon>
    </UButton>
  </div>
</template>

<style lang="scss" scoped>

</style>