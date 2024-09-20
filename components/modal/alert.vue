<script lang="ts" setup>
const isView = alert_view;
const options = ref({
  base:'overflow-hidden'
})
</script>

<template>
  <UModal v-model="isView" :ui="options">
    <div class="">
      <div class="p-6 flex flex-col items-center gap-3 min-w-[320px]">
        <Icon name="material-symbols:circle-notifications" size="28" class="text-rose-600"></Icon>
        <div class="text-center text-xl font-semibold">{{ alert_message }}</div>
      </div>
      <div class="flex items-center justify-center gap-2 border-t p-3">
        <UButton type="submit" color="black" size="lg"  class="px-6 rounded-full flex-center" @click="isView = false">확인</UButton>
      </div>
    </div>
  </UModal>
</template>

<style lang="scss" scoped>

</style>