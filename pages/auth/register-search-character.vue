<template>
  <div class="register-search-character">
    <div class="character-area w-9/12">
      <LokInputWrapper v-model="register.characterName" placeholder="캐릭터명" btn-context="검색" :btn-click="foo" />
    </div>
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/

const { register } = useRegister();

/******** Reactive Instance **********/


/******** Hooks **********/

definePageMeta({
  layout: 'auth-area',
  middleware: 'register'
})


/******** Functions **********/

const foo = () => {
  console.log(3)
}


</script>

<style lang="sass" scoped>

.register-search-character
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center
  height: 40vh

</style>