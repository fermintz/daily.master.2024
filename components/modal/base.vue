<script lang="ts" setup>

const props = defineProps<{
  title:string
}>()

const show = defineModel();
const options = ref({
  rounded: 'rounted-xs'
})
</script>

<template>
  <UModal v-model="show" :config="options">
    <form class="p-6">
      <div class="flex items-center justify-between">
        <h4 class="text-xl font-semibold">{{ title }}</h4>
      </div>
      <slot></slot>
      <slot name="footer">
        <div class="flex items-center justify-end gap-2">
          <UButton type="button" color="white" size="xl" class="min-w-[90px] flex-center" @click="show = false">취소</UButton>
          <UButton type="submit" color="blue" size="xl"  class="min-w-[90px] flex-center" @click="show = false">확인</UButton>
        </div>
      </slot>
    </form>
  </UModal>
</template>

<style lang="scss" scoped>

</style>