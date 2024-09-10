<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">회원목록</h2>
      <div class="flex items-center gap-2">
        <input 
          type="text" 
          class="h-10 rounded-md w-[300px] px-3 border border-gray-300" 
          placeholder="전화번호 뒷 4자리로 검색"
        >
        <button type="submit" class="h-10 rounded-md bg-neutral-900 px-5 text-white">검색</button>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="p-6 flex flex-col gap-5 bg-white rounded-md" >
        등록된 회원이 없습니다.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>