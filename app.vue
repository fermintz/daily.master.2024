<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Teleport to="body">
    <ModalConfirm />
    <ModalAlert />
    <ModalImageViewer/>
  </Teleport>
</template>

<script setup lang="ts">


</script>