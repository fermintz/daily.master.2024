<script lang="ts" setup>
const columns = [
  {
    key: 'num',
    label: '번호'
  },
  {
    key: 'name',
    label: '이름'
  },
  {
    key: 'phone',
    label: '연락처'
  },
  {
    key: 'work',
    label: '담당작업'
  },
  {
    key: 'shop',
    label: '등록된 상점'
  },
  {
    key: 'ing',
    label: '상태'
  },
  {
    key:'actions'
  }
]
const partners = [
  {
    num: 1,
    name: '-',
    phone: '-',
    work: '-',
    shop: '-',
    ing:'초대중',
  },
  {
    num: 2,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
    shop: '워시앤프렌즈 광안점',
  },
]

const options = {
  th:{
    base:'bg-gray-100'
  },
  td: {
    base: 'text-gray-900'
  }
}

const items = (row:any) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold">파트너관리</h2>
    </div>

    <div class="bg-white rounded-lg mt-6 overflow-hidden">
      <div class="flex items-center">
        <div class="flex items-center flex-1 px-4 gap-4 border-r">
          <Icon name="mdi:search" size="24"></Icon>
          <input type="text" class="flex-1 h-14 outline-none placeholder:text-sm" placeholder="이름으로 검색">
        </div>
        <div class="flex items-center flex-[2] px-4 gap-4">
          <Icon name="mdi:search" size="24"></Icon>
          <input type="text" class="flex-1 h-14 outline-none placeholder:text-sm" placeholder="전화번호 뒤4자리 검색">
        </div>
        <UButton type="button" class="h-10 px-5 mr-2" color="black">검색</UButton>
      </div>
      <div class="p-4 border-t flex items-center gap-3">
        <USelect v-model="country" :options="['전체', '서울', '부산']" size="md" placeholder="지역선택"></USelect>
      </div>
    </div>

    <div class=" bg-white rounded-md mt-6">
      <div class="flex items-center justify-between p-6 border-b">
        <div class="text-lg font-semibold flex items-center gap-2">
          <span>등록된 파트너</span>
          <span class="text-blue-600">2</span>
        </div>
      </div>
      <div class="p-4">
        <UTable :rows="partners" :columns="columns" :ui="options" >
          <template #actions-data="{row}">
            <UDropdown :items="items(row)">
              <UButton color="white" icon="i-heroicons-ellipsis-horizontal-20-solid"></UButton>
            </UDropdown>
          </template>
        </UTable>
      </div>
      <div class="flex items-center justify-center p-6 border-t">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>