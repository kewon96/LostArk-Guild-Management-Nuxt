<template>
  <div>
    <i :class="`icon--${iconName}`"></i>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  iconName: string
}>()

</script>

<style scoped>

</style>