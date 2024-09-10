<script lang="ts" setup>


const date = ref({
  start: new Date(),
  end: new Date(Date.now() + (1000 * 60 * 60 * 24)),
})
</script>

<template>
  <form class="bg-white p-2 rounded-md"> 
    <div class="p-4 py-6">
      <div class="flex flex-col gap-4">
        <dl class="flex items-center">
          <dt class="w-[180px]">날짜선택</dt>
          <dd class="flex items-center gap-3 flex-1">
            <UPopover>
              <UButton color="white" class="min-h-10 flex items-center justify-start px-3 min-w-[300px]">
                <Icon name="mdi:calendar" size="16" class="flex-center"></Icon>
                <span class="ml-1 leading-none">{{ $dayjs(date.start).format('YYYY-MM-DD') }} - {{
                  $dayjs(date.end).format('YYYY-MM-DD') }}</span>
                <span class="ml-1 leading-none"></span>
              </UButton>
              <template #panel="{ close }">
                <div class="p-3 bg-white">
                  <DatePicker v-model="date" is-required />
                  <div class="flex items-center justify-center">
                    <UButton @click="close" class="w-full flex items-center justify-center h-10">확인</UButton>
                  </div>
                </div>
              </template>
            </UPopover>
            <UButton type="button" color="black" class="bg-black h-10 px-3 rounded-md text-white flex-center text-sm">추가하기
            </UButton>
          </dd>
        </dl>
        <div class="h-px bg-gray-300 my-6"></div>
        <dl class="flex items-start">
          <dt class="w-[180px]">등록된 휴무일</dt>
          <dd class="flex flex-col gap-3 flex-1">
            <ul class="grid grid-cols-2 gap-3">
              <li class="col-span-2 bg-gray-100 text-sm text-gray-500 h-12 rounded-md flex-center">등록된 휴무일정이 없습니다.</li>
              <li class="bg-white border border-gray-300 rounded-md flex justify-between items-center p-4">
                <div class="flex flex-col gap-1">
                  <span class="text-sm text-red-500">휴무일정</span>
                  <span class="text-gray-900 font-semibold">2024-09-24 - 2024-09-25</span>
                </div>
                <button class="w-10 h-10 flex-center bg-gray-100 hover:bg-gray-200 rounded-full" type="button">
                  <Icon name="mdi:close"></Icon>
                </button>
              </li>
              <li class="bg-white border border-gray-300 rounded-md flex justify-between items-center p-4">
                <div class="flex flex-col gap-1">
                  <span class="text-sm text-red-500">휴무일정</span>
                  <span class="text-gray-900 font-semibold">2024-09-24 - 2024-09-25</span>
                </div>
                <button class="w-10 h-10 flex-center bg-gray-100 hover:bg-gray-200 rounded-full" type="button">
                  <Icon name="mdi:close"></Icon>
                </button>
              </li>
            </ul>
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

<style lang="scss" scoped></style>