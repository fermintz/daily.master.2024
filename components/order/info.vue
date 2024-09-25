<script lang="ts" setup>

const date = ref(new Date())



</script>

<template>
  <form class="block bg-white p-2 rounded-md">
    <div class="p-4 py-6 flex flex-col gap-4">

      <dl class="flex items-center">
        <dt class="w-[180px]">고객명</dt>
        <dd class="flex items-center gap-3 flex-1">
          <span>박수민</span>
        </dd>
      </dl>
      <dl class="flex items-center">
        <dt class="w-[180px]">연락처</dt>
        <dd class="flex items-center gap-3 flex-1">
          <span>010-8525-4561</span>
        </dd>
      </dl>

      <StyleDivider />

      <dl class="flex items-center">
        <dt class="w-[180px]">수거예약일</dt>
        <dd class="flex items-center gap-3 flex-1">
          <UPopover>
            <UButton color="white" class="flex items-center justify-start px-3 w-[200px] min-h-10">
              <Icon name="mdi:calendar" size="16" class="flex-center"></Icon>
              <span class="ml-1 leading-none">{{ $dayjs(date).format('YYYY-MM-DD') }}</span>
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
        </dd>
      </dl>
      <dl class="flex items-center">
        <dt class="w-[180px]">수거시간</dt>
        <dd class="flex items-center gap-3 flex-1">
          <label class="h-10 rounded-md flex-center bg-gray-100 text-gray-500 cursor-pointer px-3 has-[:checked]:bg-green-600 has-[:checked]:border-0 ">
            <input type="radio" class="hidden peer" checked name="time">
            <span class="peer-checked:text-white peer-checked:font-semibold">09:00</span>
          </label>
          <label class="h-10 rounded-md flex-center bg-gray-100 text-gray-500 cursor-pointer px-3 has-[:checked]:bg-green-600 has-[:checked]:border-0 ">
            <input type="radio" class="hidden peer" name="time">
            <span class="peer-checked:text-white peer-checked:font-semibold">15:00</span>
          </label>
        </dd>
      </dl>

      <StyleDivider />

      <dl class="flex items-center">
        <dt class="w-[180px]">세탁품목</dt>
        <dd class="flex items-center gap-3 flex-1">
          <div class="p-2 bg-blue-100 rounded-md text-sm leading-none gap-2 flex items-center">
            <span class="">드라이클리닝</span>
            <span class="text-blue-600 font-semibold text-base leading-none">5</span>
          </div>
          <div class="p-2 bg-blue-100 rounded-md text-sm leading-none gap-2 flex items-center">
            <span class="">이불</span>
            <span class="text-blue-600 font-semibold text-base leading-none">1</span>
          </div>
        </dd>
      </dl>

      <StyleDivider />
 
      <dl class="flex items-center ">
        <dt class="w-[180px]">주소지</dt>
        <dd class="flex items-center gap-3 flex-1">
          <input type="text" class="w-1/2 h-10 rounded-md border border-gray-300 px-3" value="부산시 사상구 덕상로 8-37번지">
          <UButton class="h-10 px-5" color="black" type="button">검색</UButton>
        </dd>
      </dl>
      <dl class="flex items-center">
        <dt class="w-[180px]">상세주소</dt>
        <dd class="flex items-center gap-3 flex-1">
          <input type="text" class="w-2/3 h-10 rounded-md border border-gray-300 px-3" value="덕포 경동메르빌 201동 2001호">
        </dd>
      </dl>

      <StyleDivider />

      <dl class="flex items-start">
        <dt class="w-[180px]">출입문정보</dt>
        <dd class="flex flex-col flex-1 gap-3">
          <div class="flex items-center gap-3">
            <label class="h-10 bg-gray-100 flex-v-center px-3 rounded-md has-[:checked]:bg-green-600 cursor-pointer">
              <input type="radio" class="peer hidden" checked name="door">
              <span class="text-sm peer-checked:text-white">누구나 출입가능</span>
            </label>
            <label class="h-10 bg-gray-100 flex-v-center px-3 rounded-md has-[:checked]:bg-green-600 cursor-pointer">
              <input type="radio" class="peer hidden"  name="door">
              <span class="text-sm peer-checked:text-white">출입문이 있습니다.</span>
            </label>
          </div>
          <textarea class="resize-none border rounded-md border-gray-300 p-3 min-h-[100px]" placeholder="출입문이 있을 경우에만 반영됩니다."></textarea>
        </dd>
      </dl>
      <StyleDivider />
      <dl class="flex">
        <dt class="min-w-[180px] pt-3">배송 요청사항</dt>
        <dd class="p-4 bg-gray-100 rounded-md flex-1 ">
          빠른 배송 부탁드려요
        </dd>
      </dl>
      <dl class="flex">
        <dt class="min-w-[180px] pt-3">세탁 요청사항</dt>
        <dd class="bg-gray-100 rounded-md flex-1  min-h-14">
          <div class="p-4">티셔츠 부분이 오염이 심해여 확인해서 깨끗하게 부탁드립니다.</div>
          <div class="p-4 flex items-center gap-3">
            <div v-for="item in 3" class="w-[100px] h-[100px] overflow-hidden rounded-md cursor-pointer" 
              @click="()=> useShowImageViewer('https://picsum.photos/1920/1080')">
              <img src="https://picsum.photos/1920/1080" class="w-full h-full object-cover object-center ">
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