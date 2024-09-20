<script lang="ts" setup>

</script>

<template>
  <form class="bg-white p-2 rounded-md"> 
    <div class="p-4 py-6">
      <div class="flex flex-col gap-4">
   
        <dl class="flex items-center">
          <dt class="w-[180px] flex flex-col">
            <span>매장사진</span>
            <span class="text-xs text-red-500">(최대 5개)</span>
          </dt>
          <dd class="flex items-center gap-3 flex-1">
            <button
              type="button"
              class="w-[140px] h-[100px] border border-gray-400 border-dashed rounded-md flex items-center justify-center flex-col"
            >
              <Icon name="mdi:camera" class="text-[24px]"></Icon>
            </button>
            <div
              class="relative"
              v-for="item in 5"
              :key="item"
            >
              <img src="https://picsum.photos/200/300" class="w-[140px] h-[100px] object-cover object-center rounded-md border border-gray-300"/>
              <button type="button" class="absolute right-1 top-1 w-7 h-7 bg-black rounded-full flex items-center justify-center z-10">
                <Icon name="mdi:close" class="text-white"></Icon>
              </button>
            </div>
          </dd>
        </dl>
        <StyleDivider />
        <dl class="flex items-start">
          <dt class="w-[180px] flex flex-col">
            <span>매장태그</span>
            <span class="text-xs text-red-500">(최대10개)</span>
          </dt>
          <dd class="flex flex-col gap-3 flex-1">
            <div class="flex items-center gap-3 flex-1">
              <input type="text" class="h-10 w-1/3 border border-gray-300 rounded-md px-3" placeholder="태그명 입력">
              <UButton class="h-10" color="black">추가하기</UButton>
            </div>
            <ul class="flex flex-wrap gap-3 mt-2">
              <li class="bg-blue-50 rounded-full flex justify-between items-center h-9 pl-4 pr-1 overflow-hidden">
                <span class=" text-blue-600">
                  생활빨래
                </span>
                <button class="w-9 h-9 flex-center" type="button">
                  <Icon name="mdi:close"></Icon>
                </button>
              </li>
              <li class="bg-blue-50 rounded-full flex justify-between items-center h-9 pl-4 pr-1 overflow-hidden">
                <span class=" text-blue-600">
                  수건
                </span>
                <button class="w-9 h-9 flex-center" type="button">
                  <Icon name="mdi:close"></Icon>
                </button>
              </li>
            </ul>
          </dd>
        </dl>
        <StyleDivider />
        <dl class="flex items-center">
          <dt class="w-[180px]">매장소개</dt>
          <dd class="flex items-center gap-3 flex-1">
            <textarea class="border border-gray-300 rounded-md w-full min-h-[180px] resize-none p-3"></textarea>
          </dd>
        </dl>
        <StyleDivider />
        <dl class="flex items-center">
          <dt class="w-[180px]">주문시 유의사항</dt>
          <dd class="flex items-center gap-3 flex-1">
            <textarea class="border border-gray-300 rounded-md w-full min-h-[180px] resize-none p-3"></textarea>
          </dd>
        </dl>
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