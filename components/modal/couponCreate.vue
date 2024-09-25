<script lang="ts" setup>
const show = ref(false)
const date = ref(new Date())
const date2 = ref(new Date())
</script>

<template>
  <ModalBase v-model="show" title="쿠폰등록">
    <div class="min-w-[500px] flex flex-col gap-6">
      <dl class="flex flex-col gap-1">
        <dt class="text-sm text-gray-500">쿠폰명</dt>
        <dd>
          <UInput type="text" size="lg" placeholder="쿠폰명을 입력해주세요"></UInput>
        </dd>
      </dl>
      <dl class="flex flex-col gap-1">
        <dt class="text-sm text-gray-500">할인금액</dt>
        <dd>
          <UInput type="number" size="lg" :min="0" value="0"></UInput>
        </dd>
      </dl>
      <StyleDivider />

      <div class="grid grid-cols-2 gap-6">
        <dl class="flex flex-col gap-2">
          <dt class="text-sm text-gray-500">
            쿠폰 개시기간
          </dt>
          <dd class="flex flex-col gap-2">
            <UPopover>
              <UButton color="white" class="flex items-center justify-start px-3 w-full min-h-10" disabled>
                <Icon name="mdi:calendar" size="16" class="flex-center"></Icon>
                <span class="ml-1 leading-none">{{ $dayjs(date).format('YYYY-MM-DD') }}</span>
              </UButton>
              <template #panel="{ close }">
                <div class="p-3 bg-white">
                  <DatePicker v-model="date" is-required />
                  <div class="flex items-center justify-center">
                    <UButton @click="close" class="w-full flex items-center justify-center h-10">확인</UButton>
                  </div>
                </div>
              </template>
            </UPopover>
          </dd>
        </dl>
        <dl class="flex flex-col gap-2">
          <dt class="text-sm text-gray-500">사용가능 수거예약기간</dt>
          <dd>
            <UPopover>
              <UButton color="white" class="flex items-center justify-start px-3 w-full min-h-10">
                <Icon name="mdi:calendar" size="16" class="flex-center"></Icon>
                <span class="ml-1 leading-none">{{ $dayjs(date).format('YYYY-MM-DD') }}</span>
              </UButton>
              <template #panel="{ close }">
                <div class="p-3 bg-white">
                  <DatePicker v-model="date" is-required />
                  <div class="flex items-center justify-center">
                    <UButton @click="close" class="w-full flex items-center justify-center h-10">확인</UButton>
                  </div>
                </div>
              </template>
            </UPopover>
          </dd>
        </dl>
      </div>
      
    </div>
  </ModalBase>
</template>

<style lang="scss" scoped>

</style>