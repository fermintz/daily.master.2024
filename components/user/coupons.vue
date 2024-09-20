<script lang="ts" setup>

</script>

<template>
  <div class="bg-white p-6 rounded-md"> 
    <div class="p-4 flex items-center justify-between bg-gray-100 rounded-md mb-5">
      <div>등록된 쿠폰 <b class="font-semibold text-blue-600">3</b></div>
      <div>
        <UButton size="md" color="white">쿠폰등록</UButton> 
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <CardCoupon v-for="item in 3" :key="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>