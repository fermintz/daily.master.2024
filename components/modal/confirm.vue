<script lang="ts" setup>

defineProps<{
  title:string,
  msg:string
}>()


const isOpen = ref(true)
const options = ref({
  rounded: 'rounted-xs'
})

const show = ()=>{
  isOpen.value = true
}

defineExpose({show})

</script>

<template>
  <UModal v-model="isOpen" :config="options">
    <form class="p-6">
      <div class="flex items-center justify-between">
        <h4 class="text-xl font-semibold">테스트</h4>
      </div>
      <div class="mt-3 mb-6 min-w-[360px]">
        테스트내용
      </div>
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