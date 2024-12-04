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
    key:'actions'
  }
]
const partners = [
  {
    num: 1,
    name: '박수민',
    phone: '010-8525-4561',
    work: '라이더',

  },
  {
    num: 2,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 3,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 4,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 5,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 6,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 7,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 8,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },{
    num: 9,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 10,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 11,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 12,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 13,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 14,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
  },
  {
    num: 15,
    name: '김용희',
    phone: '010-1234-5677',
    work: '검수자',
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

const visible = ref(false)
const selected = ref([partners[0]])
</script>

<template>
  <div class="bg-white p-2 rounded-md">
    <ModalBase v-model="visible" title="파트너 등록하기">
      <div class="min-w-[700px]">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span>등록된 파트너</span>
            <span>2</span> 
          </div>
          <div class="flex gap-2 items-center">
            <UInput type="text" placeholder="전화번호 뒤 4자리로 검색" size="lg" class="w-[240px]"></UInput>
            <UButton size="lg" color="black">검색</UButton>
          </div>
        </div>
        <div class="border rounded-md">
          <UTable v-model="selected" :rows="partners" :columns="columns" :page-count="5"></UTable>
        </div>
        <div class="flex items-center justify-center mt-6">
          <Pagination />
        </div>
      </div>
    </ModalBase>
    <div class="px-4 py-6 flex flex-col gap-5">
      <div class="flex items-center justify-between">
        <div class="font-semibold text-lg flex items-center gap-2">
          <span>등록된 파트너</span>
          <span class="text-blue-600">2</span>
        </div>
        <div>
          <UButton size="md" color="white" @click="visible = true">
            <span>파트너 등록하기</span>
          </UButton>
        </div>
      </div>
      <UTable :rows="partners" :columns="columns" :ui="options" >
        <template #actions-data="{row}">
          <UDropdown :items="items(row)">
            <UButton color="white" icon="i-heroicons-ellipsis-horizontal-20-solid"></UButton>
          </UDropdown>
        </template>
      </UTable>
      <div class="flex items-center justify-center mt-6">
        <Pagination />
      </div>
    </div>
  </div> 
</template>

<style lang="scss" scoped></style>