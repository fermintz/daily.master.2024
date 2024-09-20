<script lang="ts" setup>

</script>

<template>
  <form class="bg-white p-2 rounded-md">
    <div class="p-4 py-6">
      <div class="flex items-center justify-end mb-6">

        <div class="flex items-center gap-3">
          <form name="fileForm" class="flex items-center gap-2">
            <UInput type="file" size="lg" icon="i-heroicons-folder" model-value=""></UInput>
            <UButton type="submit" color="gray" size="lg">적용하기</UButton>
          </form>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="flex items-center bg-gray-100 rounded-md p-3 gap-10">
          <span class="flex-1">생활물빨래 30L</span>
          <span class="font-semibold">14,900원</span>
        </div>
        <div class="flex items-center bg-gray-100 rounded-md p-3 gap-10">
          <span class="flex-1">생활물빨래 50L</span>
          <span class="font-semibold">20,900원</span>
        </div>
        <div class="flex items-center bg-gray-100 rounded-md p-3 gap-10">
          <span class="flex-1">생활물빨래 +10L</span>
          <span class="font-semibold">3,000원</span>
        </div>
        <div class="flex items-center bg-gray-100 rounded-md p-3 gap-10">
          <span class="flex-1">일반 와이셔츠</span>
          <span class="font-semibold">2,500원</span>
        </div>
        <div class="flex items-center bg-gray-100 rounded-md p-3 gap-10">
          <span class="flex-1">남방 / 면,린넨(마) 소재 와이셔츠 류</span>
          <span class="font-semibold">3,500원</span>
        </div>
        <div class="flex items-center bg-gray-100 rounded-md p-3 gap-10">
          <span class="flex-1">남방 / 면,린넨(마) 소재 셔츠 류</span>
          <span class="font-semibold">4,500원</span>
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