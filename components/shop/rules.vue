<script lang="ts" setup>

</script>

<template>
  <form class="bg-white p-2 rounded-md"> 
    <div class="p-4 py-6">
      <div class="flex flex-col gap-4">
        <dl class="flex items-center">
          <dt class="w-[180px] flex flex-col">
            <span>정기휴무일</span>
          </dt>
          <dd class="flex items-center gap-3 flex-1">
            <label 
              class="w-10 h-10 bg-gray-100 rounded-md flex-center has-[:checked]:bg-blue-600 cursor-pointer hover:bg-gray-200"
              v-for="item in ['월','화','수','목','금','토','일']" :key="item"
            >
              <input type="checkbox" class="hidden peer"/>
              <span class="peer-checked:text-white">{{ item }}</span>
            </label>
          </dd>
        </dl>
        <StyleDivider />
        <dl class="flex items-start">
          <dt class="w-[180px] flex flex-col">
            <span>희망 수거시간</span>
          </dt>
          <dd class="flex flex-col gap-3 flex-1">
            <div class="flex items-center gap-3 flex-1">
              <input type="time" class="h-10 min-w-[200px] border rounded-md border-gray-300 px-3">
              <UButton class="h-10" color="black">추가하기</UButton>
            </div>
            <ul class="grid grid-cols-3 gap-3 mt-2 ">
              <li class="col-span-3 bg-gray-100 text-sm text-gray-500 h-12 rounded-md flex-center">등록된 수거시간이 없습니다.</li>
              <li class="bg-blue-50 rounded-md flex justify-between items-center h-12 pl-3">
                <span class="text-sm text-gray-500">
                  <b class="text-blue-600 font-semibold text-lg">10:00</b> 부터 수거시작
                </span>
                <button class="w-12 h-12 flex-center" type="button">
                  <Icon name="mdi:close"></Icon>
                </button>
              </li>
              <li class="bg-blue-50 rounded-md flex justify-between items-center h-12 pl-3">
                <span class="text-sm text-gray-500">
                  <b class="text-blue-600 font-semibold text-lg">15:30</b> 부터 수거시작
                </span>
                <button class="w-12 h-12 flex-center" type="button">
                  <Icon name="mdi:close"></Icon>
                </button>
              </li>
            </ul>
          </dd>
        </dl>
        <StyleDivider />
        <dl class="flex items-center">
          <dt class="w-[180px] flex flex-col">
            <span>배송비</span>
          </dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3" value="0">
            <span class="h-10 px-3 bg-gray-100 flex-center rounded-md text-sm text-gray-500">원</span>
          </dd>
        </dl>
        <dl class="flex items-center">
          <dt class="w-[180px] flex flex-col">
            <span>패널티</span>
          </dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3" value="0">
            <span class="h-10 px-3 bg-gray-100 flex-center rounded-md text-sm text-gray-500">원</span>
          </dd>
        </dl>
        <dl class="flex items-center">
          <dt class="w-[180px] flex flex-col">
            <span>최소주문금액</span>
          </dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3" value="0">
            <span class="h-10 px-3 bg-gray-100 flex-center rounded-md text-sm text-gray-500">원</span>
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