<template>
  <div class="register">
    <div class="information-area w-9/12">
      <LokInput type="email"    placeholder="이메일" name="email"/>
      <LokInput type="text"     placeholder="인증번호" name="password"/>
      <LokInput type="password" placeholder="비밀번호" name="password"/>
      <LokInput type="password" placeholder="비밀번호 확인" name="password"/>
    </div>
    <div class="next-step w-9/12">
      <LokButton type="submit" class="solid w-full">다음단계</LokButton>
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
  .register
    display: flex
    flex-direction: column
    row-gap: 10vh
    justify-content: center
    align-items: center
    height: 40vh

    .next-step
      height: 40px

  .information-area
    display: grid
    grid-row-gap: 25px
    //width: 14vw
</style>