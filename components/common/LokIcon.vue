<template>
  <div>
    <i :class="`icon--${iconName} w-full h-full block`"></i>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  iconName: string
}>()

</script>

<style scoped>

</style>