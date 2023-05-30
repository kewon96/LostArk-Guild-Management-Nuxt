<template>
  <main>
    <AuthHeader />
    <AuthSection>
      <slot />
    </AuthSection>
  </main>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/


/******** Hooks **********/


/******** Functions **********/


</script>

<style lang="sass" scoped>
  main
    position: relative
    background-color: #ffffff
    width: 25vw
    height: 80vh
    min-width: 450px
    min-height: 550px
    left: 50%
    top: 50%
    transform: translate(-50%, 15%)
    overflow-y: auto

</style>