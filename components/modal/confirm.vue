<script lang="ts" setup>
const isView = confirm_view;

</script>

<template>
  <UModal v-model="isView">
    <form>
      <div class="flex flex-col gap-2 p-6 min-w-[400px]">
        <span class="text-gray-500">{{ confirm_title }}</span>
        <span class="text-lg font-semibold">{{ confirm_message }}</span>
      </div>
      <slot name="footer">
        <div class="flex items-center justify-end gap-2 p-4 border-t">
          <UButton type="button" color="white" size="xl" class="min-w-[90px] flex-center px-4 text-sm" @click="isView = false">아니오
          </UButton>
          <UButton type="submit" color="blue" size="xl" class="min-w-[90px] flex-center px-4 text-sm" @click="isView = false">네
          </UButton>
        </div>
      </slot>
    </form>
  </UModal>
</template>

<style lang="scss" scoped></style>