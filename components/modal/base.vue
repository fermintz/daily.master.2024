<script lang="ts" setup>
const props = defineProps<{
  title:string
}>()

const show = ref(false);
</script>

<template>
  <UModal v-model="show">
    <form>
      <div class="p-6 flex flex-col gap-6">
        <h4 class="text-xl font-semibold">{{ title }}</h4>
        <slot></slot>
      </div>
   
      
      <slot name="footer">
        <div class="flex items-center justify-end gap-2 p-4 border-t">
          <UButton type="button" color="white" size="xl" class="min-w-[90px] flex-center" @click="show = false">취소</UButton>
          <UButton type="submit" color="blue" size="xl"  class="min-w-[90px] flex-center" @click="show = false">확인</UButton>
        </div>
      </slot>
    </form>
  </UModal>
</template>

<style lang="scss" scoped>

</style>