<script lang="ts" setup>

</script>

<template>
  <div class="p-6 bg-white rounded-md flex flex-col">
    <dl class="flex flex-col gap-3 after:border-b after:my-8 last:after:border-0">
      <dt class="flex gap-2 items-center">
        <span class="">2024년 8월 28일</span>
        <span class="text-sm text-gray-500">수요일</span>
      </dt>
      <dd class="grid grid-cols-4 gap-5">
        <div class="flex flex-col" v-for="item in ['세탁완료']" :key="item">
          <div class="flex flex-col bg-gray-100 rounded-md overflow-hidden p-4" >
            <span class="text-sm text-gray-500">12:12</span>
            <span class=" font-semibold">{{item}}</span>
          </div>
        </div>
      </dd>
    </dl>
    <dl class="flex flex-col gap-4 after:border-b after:my-8 last:after:border-0">
      <dt class="flex gap-2 items-center">
        <span class=" ">2024년 8월 26일</span>
        <span class="text-sm text-gray-500">월요일</span>
      </dt>
      <dd class="grid grid-cols-4 gap-5">
        <div class="flex flex-col" >
          <div class="flex flex-col bg-gray-100 rounded-md overflow-hidden p-4" >
            <span class="text-sm text-gray-500">09:30</span>
        
            <span class=" font-semibold">수거완료</span>
            <div class="rounded-md h-[150px] overflow-hidden mt-5 cursor-pointer">
              <img src="https://picsum.photos/720/1280" class="w-full h-full object-cover object-center" @click="useShowImageViewer('https://picsum.photos/720/1280')">
            </div>
          </div>
        </div>

        <div class="flex flex-col" >
          <div class="flex flex-col bg-gray-100 rounded-md overflow-hidden p-4" >
            <span class="text-sm text-gray-500">15:57</span>
        
            <span class=" font-semibold">검수완료</span>

          </div>
        </div>
      </dd>
    </dl>
    <dl class="flex flex-col gap-3 after:border-b after:my-8 last:after:border-0">
      <dt class="flex gap-2 items-center">
        <span class="">2024년 8월 25일</span>
        <span class="text-sm text-gray-500">일요일</span>
      </dt>
      <dd class="grid grid-cols-4 gap-5">
        <div class="flex flex-col" v-for="item in ['접수완료']" :key="item">
          <div class="flex flex-col bg-gray-100 rounded-md overflow-hidden p-4" >
            <span class="text-sm text-gray-500">18:23</span>
            <span class=" font-semibold">{{item}}</span>

          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped>

</style>