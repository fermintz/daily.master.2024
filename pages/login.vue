<script lang="ts" setup>
definePageMeta({
  layout:false
})
</script>

<template>
  <div class="fixed w-full h-full top-0 left-0 flex flex-col items-center justify-center bg-gray-200 p-5">
    <div class="flex lg:flex-row flex-col gap-2 max-w-[900px] w-full rounded-2xl overflow-hidden border-2 border-gray-100 p-3 bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.2)] drop-shadow-md">
      <div class="flex-[3] min-h-[200px] p-5 h-full flex flex-col gap-5 items-center justify-center bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl">
        <img src="~/assets/img/daily-w.svg" class="lg:h-20 h-14">
        <span class="text-sm text-white tracking-[8px] opacity-40">Daily Wash</span>
      </div>
      <div class="flex-[2] p-8 py-20 flex flex-col bg-white rounded-xl">
        <div class="flex flex-col mb-8 gap-4 items-center">
          <span class="text-5xl font-semibold">Sign In</span>
          <span class="text-gray-500 text-sm">데일리세탁 마스터 로그인</span>
        </div>
        <form class="flex flex-col gap-3">
          <UInput type="Email" icon="mdi:email-outline" size="xl" placeholder="이메일"></UInput>
          <UInput type="password" icon="mdi:lock-outline" size="xl" placeholder="패스워드"></UInput>
          <UButton type="submit" size="xl" class="flex-center" color="black">로그인</UButton>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>