<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">매장목록</h2>
      <div class="flex items-center gap-2">
        <input 
          type="text" 
          class="h-10 rounded-md w-[300px] px-3 border border-gray-300" 
          placeholder="매장명 검색"
        >
        <button type="submit" class="h-10 rounded-md bg-neutral-900 px-5 text-white">검색</button>
      </div>
    </div>

    <div class="bg-white rounded-lg mt-6">
      <div class="grid grid-cols-3 gap-5 bg-white p-6 rounded-lg">
        <ShopCard v-for="item in 7" :key="item"/>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

</style>