<script lang="ts" setup>
const country = ref()
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">매장목록</h2>
    </div>

    <div class="bg-white rounded-lg mt-6 overflow-hidden">
      <div class="flex items-center">
        <div class="flex items-center flex-1 px-4 gap-4">
          <Icon name="mdi:search" size="24"></Icon>
          <input type="text" class="flex-1 h-14 outline-none placeholder:text-sm" placeholder="매장명 검색">
        </div>
        <UButton type="button" class="h-10 px-5 mr-2" color="black">검색</UButton>
      </div>
      <div class="p-4 border-t flex items-center gap-3">
        <USelect v-model="country" :options="['전체','서울','부산']" size="md" placeholder="지역선택"></USelect>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-5 bg-white p-6 rounded-lg mt-6">
      <CardShop v-for="item in 7" :key="item"/>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>