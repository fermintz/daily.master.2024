<script lang="ts" setup>

</script>

<template>
  <form class="bg-white p-2 rounded-md"> 
    <div class="p-4 py-6">
      <div class="flex flex-col gap-4">
        <dl class="flex items-center">
          <dt class="w-[180px]">매장구분</dt>
          <dd class="flex items-center gap-10 flex-1">
            <label class="flex items-center gap-2">
              <input type="radio" class="w-4 h-4" name="shop_category" checked>
              <span>드라이클리닝 세탁소</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" class="w-4 h-4" name="shop_category">
              <span>셀프빨래방</span>
            </label>
          </dd>
        </dl>
      </div>
      <div class="h-px bg-gray-300 my-6"></div>
      <div class="flex flex-col gap-4">
        <dl class="flex items-center">
          <dt class="w-[180px]">매장명</dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/2 h-10 rounded-md border border-gray-300 px-3">
          </dd>
        </dl>
        <dl class="flex items-center ">
          <dt class="w-[180px]">매장주소지</dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/2 h-10 rounded-md border border-gray-300 px-3">
            <UButton class="h-10 px-5" color="black" type="button">검색</UButton>
          </dd>
        </dl>
        <dl class="flex items-center">
          <dt class="w-[180px]">상세주소</dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-full h-10 rounded-md border border-gray-300 px-3">
          </dd>
        </dl>
      </div>
      <div class="h-px bg-gray-300 my-6"></div>
      <div class="flex flex-col gap-4">
        <dl class="flex items-center">
          <dt class="w-[180px]">사업자등록번호</dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3">
          </dd>
        </dl>
        <dl class="flex items-center ">
          <dt class="w-[180px]">담당자 성함</dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3">
          </dd>
        </dl>
        <dl class="flex items-center">
          <dt class="w-[180px]">담당자 연락처</dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3">
          </dd>
        </dl>
      </div>
      <div class="h-px bg-gray-300 my-6"></div>
      <div class="flex flex-col gap-4">
        <dl class="flex items-center">
          <dt class="w-[180px]">은행명</dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3">
          </dd>
        </dl>
        <dl class="flex items-center ">
          <dt class="w-[180px]">계좌주 성함</dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/2 h-10 rounded-md border border-gray-300 px-3">
          </dd>
        </dl>
        <dl class="flex items-center">
          <dt class="w-[180px]">계좌번호</dt>
          <dd class="flex items-center gap-3 flex-1">
            <input type="text" class="w-1/3 h-10 rounded-md border border-gray-300 px-3">
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