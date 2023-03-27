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
@import "@/assets/styles/mixins/mixins.sass"

a
  color: $primary-color


</style>