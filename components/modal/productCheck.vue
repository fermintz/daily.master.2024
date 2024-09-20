<script lang="ts" setup>
const show = defineModel()
const category = ref('물빨래')
</script>

<template>
  <ModalBase v-model="show" title="검수하기">  
    <div class="min-w-[1200px] flex flex-col gap-3">
      <div class="p-4 bg-gray-100 rounded-md flex items-center justify-between gap-10">
        <div class="flex items-center gap-10">
          <UCheckbox label="인수증을 발송합니다" />
          <UCheckbox label="배송비(4,000원)를 청구합니다" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">합계:</span>
          <span class="font-semibold text-rose-600">104,900원</span>
        </div>
      </div>
      <div class="flex gap-10">
        <div class="flex-1 border rounded-md flex">
          <div class="flex flex-col border-r min-w-[200px] max-h-[500px] overflow-y-auto">
            <a
              class="p-3 text-sm flex items-center border-b last:border-b-0 cursor-pointer"
              :class="[item === category ? 'bg-blue-600 text-white' : 'hover:bg-gray-100']"
              @click="category = item"
              v-for="item in ['물빨래','상의','하의','상의외투','신발','침구류','커튼','러그','스포츠웨어','교복/한복','아동','기타','명품관','준명품관']">
              {{ item }}
            </a>
          </div>
          <div class="flex-1 flex flex-col gap-2 p-3 bg-gray-100 max-h-[500px] overflow-y-auto">
            <div class="border p-3 bg-white rounded-md flex items-center" v-for="item in 10" :key="item">
              <div class="flex flex-col flex-1">
                <span>생활 물빨래 30L</span>
                <span class="text-sm text-gray-500">14,900원</span>
              </div>
              <UButton type="button" color="gray"  class="w-9 h-9 flex-center">
                <Icon name="mdi:plus"></Icon>
              </UButton>
            </div>
          </div>
        </div>
        <div class="relative flex-1 border rounded-md w-full max-h-[500px] overflow-y-auto bg-gray-100">
          <div class="flex items-center gap-10 border-b p-3 bg-white" v-for="item in 8" :key="item">
            <div class="flex flex-col flex-1">
              <span>생활 물빨래 30L</span>
              <span class="text-xs text-gray-500">물빨래 / 14,900원</span>
            </div>
            <div class="flex items-center gap-1">
              <UButton type="button" color="gray" class="p-2 flex-center h-7">
                <Icon name="mdi:minus"></Icon>
              </UButton>
              <div class="px-3 min-w-10 border h-7 flex-center text-sm border-gray-300 rounded-md">
                11
              </div>
              <UButton type="button" color="gray" class="p-2 flex-center h-7">
                <Icon name="mdi:plus"></Icon>
              </UButton>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-sm">14,900원</span>
              <UButton color="black" size="sm" class="border rounded-md flex-center px-2 h-7">
                <Icon name="material-symbols:close"></Icon>
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModalBase>
</template>

<style lang="scss" scoped>

</style>