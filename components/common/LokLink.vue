<template>
  <NuxtLink :to="href">{{ context }}</NuxtLink>
</template>

<script setup lang="ts">

defineProps<{
  href: string,
  context: string
}>()

</script>

<style scoped lang="sass">

.router-link-exact-active
  color: #12b488



</style>