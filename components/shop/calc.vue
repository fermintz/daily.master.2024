<script lang="ts" setup>
const tabs = ref('정산대기')
</script>

<template>
  <div>
    <div class="p-1 gap-1 bg-gray-900 rounded-md flex items-center mb-4">
      <a 
        v-for="item in ['정산대기','완료된정산']"
        class="h-9 rounded flex-center px-3 text-sm cursor-pointer "
        :class="[tabs === item ? 'bg-white font-semibold hover:bg-white': ' text-gray-400 hover:bg-gray-700 hover:text-gray-100']"
        @click="tabs = item"
      >
        {{ item }}
      </a>
    </div>
    <div class="flex flex-col bg-white rounded-md">
      <div class="flex flex-col p-6 gap-4">
        <CardCalc />
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>