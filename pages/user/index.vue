<script lang="ts" setup>
const members =[
  {
    area:'부산',
    name:'박수민',
    phone:'010-8525-4561',
    address:'부산시 사상구 덕상로 8-37 201동 2001호',
    orderAmout:'3건',
    coupon:'1개',
    
  },
  {
    area:'부산',
    name:'박수민',
    phone:'010-8525-4561',
    address:'부산시 사상구 덕상로 8-37 201동 2001호',
    orderAmout:'17건',
    coupon:'1개',
    
  },
  {
    area:'부산',
    name:'박수민',
    phone:'010-8525-4561',
    address:'부산시 사상구 덕상로 8-37 201동 2001호',
    orderAmout:'10건',
    coupon:'2개',
  },
]

const options = {
  base:'min-w-full table-fixed',
  tr:{
    base:'hover:bg-gray-50'
  },
  th:{
    base:'bg-gray-100'
  },
  td:{
    base:''
  },
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold">회원조회</h2>
    </div>

    <div class="bg-white rounded-lg mt-6 overflow-hidden">
      <div class="flex items-center">
        <div class="flex items-center flex-1 px-4 gap-4">
          <Icon name="mdi:search" size="24"></Icon>
          <input type="text" class="flex-1 h-14 outline-none placeholder:text-sm" placeholder="전화번호 뒤4자리 검색">
        </div>
        <UButton type="button" class="h-10 px-5 mr-2" color="black">검색</UButton>
      </div>
      <div class="p-4 border-t flex items-center gap-3">
        <USelect v-model="country" :options="['전체','서울','부산']" size="md" placeholder="지역선택"></USelect>
      </div>
    </div>

    <div class="p-6 bg-white rounded-md flex flex-col gap-3 mt-6" >
      <UTable :rows="members" :ui="options" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>