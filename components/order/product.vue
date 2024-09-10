<script lang="ts" setup>
const product = ref(false)
const category = ref('물빨래')


</script>

<template>
  <form class="block bg-white p-2 rounded-md">
    <div class="p-4 py-6">
      <div class="flex items-center justify-between mb-5">
        <h4>
          <span>등록된 세탁물</span>
          <span class="ml-3 text-blue-600">총 4건</span>
        </h4>
        <div class="flex items-center gap-2">
          <UButton class="h-10" color="white" @click="product = true">세탁물등록</UButton>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <div class="col-span-2 p-4 bg-gray-100 rounded-md text-gray-500">등록된 세탁물이 없습니다.</div>
        <div class="col-span-2 p-4 bg-gray-100 rounded-md flex items-center justify-between">
          <span>상품합계</span>
          <span class="font-semibold text-lg">37,000원</span>
        </div>
        <div class="flex items-center p-4 border border-gray-300 rounded-md" v-for="item in 7" :key="item">
          <div class="flex items-center flex-1 gap-5">
            <div class="flex flex-col gap-1 flex-1">
              <span>티셔츠</span>
              <div class="flex items-center gap-2 text-sm text-gray-500">
                상의 / 9,800원 
              </div>
            </div>
            <span>1건</span>
            <span class="font-semibold">9,000원</span>
          </div>
          <UButton class="w-8 h-8 flex-center ml-5" color="gray">
            <Icon name="mdi:close" size="18"></Icon>
          </UButton>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 flex items-center justify-end rounded p-3 gap-5 mt-10">
      <p class="text-gray-900 text-sm">자료를 수정하셨다면, 반드시 저장하기 버튼을 클릭해주세요</p>
      <UButton color="blue" class="h-11 px-9 rounded" type="submit">
        <span>저장하기</span>
      </UButton>
    </div>
    <ModalBase v-model="product" title="상품선택">
    <div class="w-[900px] flex my-6 gap-5">
      <div class="min-w-[200px]  flex flex-col rounded-md border border-gray-300 max-h-[500px] overflow-y-auto">
        <a
          class="p-3 text-sm flex items-center border-b last:border-b-0 cursor-pointer"
          :class="[item === category ? 'bg-blue-600 text-white' : 'hover:bg-gray-100']"
          @click="category = item"
          v-for="item in ['물빨래','상의','하의','상의외투','신발','침구류','커튼','러그','스포츠웨어','교복/한복','아동','기타','명품관','준명품관']">
          {{ item }}
        </a>
      </div>
      <div class="gap-4 bg-neutral-100 flex-1 rounded-md p-4 max-h-[500px] overflow-y-auto"> 
        <div class="grid grid-cols-2 gap-2">
          <div class="flex items-center p-3 gap-3 border rounded-md bg-white"
            v-for="item in 15" :key="item"
          >
            <div class="flex-1 flex flex-col gap-1"> 
              <span>생활 물빨래 30L</span>
              <span class="text-sm text-gray-500">14,900원</span>
            </div>
            <UButton type="button" class="w-9 h-9" color="gray">
              <Icon name="mdi:plus"></Icon>
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end">
        <UButton color="white" size="xl" class="w-[90px] flex-center">닫기</UButton>
      </div>
    </template>
  </ModalBase>
  </form>
</template>

<style lang="scss" scoped>

</style>