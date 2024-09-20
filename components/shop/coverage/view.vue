<script lang="ts" setup>

</script>

<template>
  <form class="bg-white p-2 rounded-md"> 
    <div class="p-4 py-6">
      <div class="flex flex-col gap-5">
        <div class="flex items-center justify-between">
          <h4 class="flex items-center gap-3">
            <span>구역설정</span>
          </h4>
          <div class="flex items-center gap-3 justify-end">
            <UButton class="h-10 px-4" color="white">초기화</UButton>
            <div class="flex items-center gap-3 border border-gray-300 rounded-md h-10 px-3">
              <span class="text-sm">구역그리기</span>
              <label class="h-6 p-1 w-11 bg-gray-300 rounded-full relative flex items-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:justify-end">
                <input type="checkbox" class="hidden peer"/>
                <span class="block w-4 h-4 bg-white rounded-full"></span>
              </label>
            </div>
          </div>
        </div>
      
        <ShopCoverageMap />
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