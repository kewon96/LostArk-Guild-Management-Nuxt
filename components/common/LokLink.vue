<template>
  <NuxtLink :to="to">{{ context }}</NuxtLink>
</template>

<script setup lang="ts">

defineProps<{
  to: string,
  context: string
}>()

</script>

<style scoped lang="sass">

</style>