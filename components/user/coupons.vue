<script lang="ts" setup>
const couponCreate = ref(false)
</script>

<template>
  <div class="bg-white p-6 rounded-md"> 
    <div class="p-4 flex items-center justify-between bg-gray-100 rounded-md mb-5">
      <div>등록된 쿠폰 <b class="font-semibold text-blue-600">3</b></div>
      <div>
        <UButton size="md" color="white" @click="couponCreate = true">쿠폰등록</UButton> 
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <CardCoupon v-for="item in 3" :key="item" />
    </div>

    <ModalCouponCreate v-model="couponCreate"/>
  </div>
</template>

<style lang="scss" scoped>

</style>