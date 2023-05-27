<template>
  <div class="register-search-character">
    <div class="character-area w-9/12">
      <LokInput type="text" class="w-4/5" placeholder="캐릭터명" />
      <LokButton>검색</LokButton>
    </div>
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/


/******** Hooks **********/

definePageMeta({
  layout: 'auth-area',
})


/******** Functions **********/



</script>

<style lang="sass" scoped>

.register-search-character
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center
  height: 40vh

  .character-area
    display: flex


</style>