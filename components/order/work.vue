<script lang="ts" setup>

</script>

<template>
  <form class="block bg-white p-2 rounded-md">
    <div class="p-4 py-6 flex flex-col">
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
      <dl class="flex flex-col gap-3 after:border-b after:my-8 last:after:border-0">
        <dt class="flex gap-2 items-center">
          <span class=" ">2024년 8월 26일</span>
          <span class="text-sm text-gray-500">월요일</span>
        </dt>
        <dd class="grid grid-cols-3 gap-5">
          <div class="flex flex-col" v-for="item in ['수거완료','검수완료']" :key="item">
            <div class="flex flex-col bg-gray-100 rounded-md overflow-hidden p-4" >
              <span class="text-sm text-gray-500" v-if="item === '수거완료'">09:30</span>
              <span class="text-sm text-gray-500" v-else>15:37</span>
              <span class=" font-semibold">{{item}}</span>
              <div class="rounded-md h-[150px] overflow-hidden mt-5 cursor-pointer" v-if="item === '수거완료'">
                <img src="https://picsum.photos/360/720" class="w-full h-full object-cover object-center">
              </div>
            </div>
          </div>
        </dd>
      </dl>
      <dl class="flex flex-col gap-3 after:border-b after:my-8 last:after:border-0">
        <dt class="flex gap-2 items-center">
          <span class="">2024년 8월 25일</span>
          <span class="text-sm text-gray-500">일요일</span>
        </dt>
        <dd class="grid grid-cols-3 gap-5">
          <div class="flex flex-col" v-for="item in ['접수완료']" :key="item">
            <div class="flex flex-col bg-gray-100 rounded-md overflow-hidden p-4" >
              <span class="text-sm text-gray-500">18:23</span>
              <span class=" font-semibold">{{item}}</span>

            </div>
          </div>
        </dd>
      </dl>
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