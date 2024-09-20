<script lang="ts" setup>
const isView = image_viewer;

const options = ref({
  rounded: 'rounded-1xl',
  base: 'overflow-hidden',
  background: 'bg-transparent',
  shadow: 'shadow-none',
});
</script>

<template>
  <UModal v-model="isView" :ui="options" >
    <div @click="isView = false" class="cursor-pointer">
      <img :src="image_viewer_url" class="max-h-[80vh] rounded-md">
    </div>
  </UModal>
</template>

<style lang="scss" scoped></style>