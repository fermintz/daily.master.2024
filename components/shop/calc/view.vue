<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col bg-white rounded-md">
    <div class="flex flex-col p-6 gap-4">
      <ShopCalcCard v-for="item in 10" :key="item"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>