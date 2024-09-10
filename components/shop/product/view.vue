<script lang="ts" setup>
import draggable from 'vuedraggable'
const categoryActive = ref('명품관')

const categorys = ref(['명품관','준명품관','상의','상의외투','하의','골프웨어/스키복','교복/한복','아동','신발','기타','침구류','커튼','러그'])
const products = ref([{},{},{},{}])

const drag = ref(false)
const drag2 = ref(false)



</script>

<template>

  

  <form class="bg-white p-2 rounded-md" name="total"> 
    <div class="p-4 py-6">
      <div class="flex items-center justify-between mb-4">
        <h4 class="flex items-center gap-3">
          <span>상품목록</span>
        </h4>
        <div class="flex items-center gap-3">
          <form name="fileForm" class="flex items-center gap-2">
            <UInput type="file" size="lg" icon="i-heroicons-folder" model-value=""></UInput>
            <UButton type="submit" color="gray" size="lg">적용하기</UButton>
          </form>
        </div>
      </div>
      <div class="flex border rounded-md overflow-hidden">
        <draggable
          v-model="categorys"
          @start="drag=true"
          @end="drag=false"
          item-key="id"
          class="min-w-[260px] flex flex-col bg-gray-100 z-10 relative"
          ghost-class="ghost-category"
          handle=".handle"
        >
          <template #item="{element}">
            <a 
              class="relative h-12 border-b flex-v-center text-sm px-2 gap-2"
              :class="[categoryActive === element ? ' bg-blue-600 text-white font-semibold border-b-blue-600':'text-gray-500 hover:bg-white']"
              @click="categoryActive = element"
              >
                <div class="handle h-9 w-9 hover:bg-[rgba(0,0,0,0.1)] rounded-md flex-center cursor-pointer">
                  <Icon name="mdi:drag" size="18"></Icon>
                </div>
                <input type="text" :value="element" class="h-10 outline-none w-full bg-transparent cursor-pointer placeholder:text-blue-200" placeholder="카테고리명 입력"/>
                <span class="absolute w-2 h-2 bg-blue-600 rotate-45 -right-1" v-if="categoryActive === element"></span>
            </a>
          </template>
        </draggable>
          
        <draggable
          v-model="products"
          @start="drag2=true"
          @end="drag2=false"
          item-key="id"
          class="flex-1 border-l p-6 relative z-0 flex flex-col gap-3 w-full"
          ghost-class="ghost-item"
          handle=".handle"
        >
          <template #item="{element}">
            <ShopProductCard />
          </template>
        </draggable>
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
.ghost-item{
  background:#f2f2f2;
}

.ghost-category{
  background:#fff
}
</style>