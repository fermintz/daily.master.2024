<script lang="ts" setup>

</script>

<template>
  <form class="bg-white p-2 rounded-md"> 
    <div class="p-4 py-6 flex flex-col gap-4">
      <dl class="flex items-center">
        <dt class="w-[180px]">회원설정</dt>
        <dd class="flex items-center gap-3 flex-1">
          <label class="h-10 bg-gray-100 flex-v-center px-3 rounded-md has-[:checked]:bg-black cursor-pointer">
            <input type="radio" class="peer hidden" checked name="member">
            <span class="text-sm peer-checked:text-white">일반회원</span>
          </label>
          <label class="h-10 bg-gray-100 flex-v-center px-3 rounded-md has-[:checked]:bg-red-600 cursor-pointer">
            <input type="radio" class="peer hidden"  name="member">
            <span class="text-sm peer-checked:text-white">불량회원</span>
          </label>
        </dd>
      </dl>
      <StyleDivider />
      <dl class="flex items-center">
        <dt class="w-[180px]">고객명</dt>
        <dd class="flex items-center gap-3 flex-1">
          <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3" value="박수민">
        </dd>
      </dl>
      <dl class="flex items-center">
        <dt class="w-[180px]">연락처</dt>
        <dd class="flex items-center gap-3 flex-1">
          <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3" value="010-8525-4561">
        </dd>
      </dl>
      <StyleDivider />
      <dl class="flex items-center ">
        <dt class="w-[180px]">주소지</dt>
        <dd class="flex items-center gap-3 flex-1">
          <input type="text" class="w-1/2 h-10 rounded-md border border-gray-300 px-3" value="부산시 사상구 덕상로 8-37">
          <UButton class="h-10 px-5" color="black" type="button">검색</UButton>
        </dd>
      </dl>
      <dl class="flex items-center">
        <dt class="w-[180px]">상세주소</dt>
        <dd class="flex items-center gap-3 flex-1">
          <input type="text" class="w-full h-10 rounded-md border border-gray-300 px-3" value="덕포 경동메르빌 201동 2001호">
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
      <dl class="flex items-start">
        <dt class="min-w-[180px]">고객관련 메모</dt>
        <dd class="flex flex-col flex-1 gap-3">
          <textarea class="resize-none border rounded-md border-gray-300 p-3 min-h-[150px]" placeholder="고객과 관련된 메모를 남길 수 있습니다."></textarea>
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