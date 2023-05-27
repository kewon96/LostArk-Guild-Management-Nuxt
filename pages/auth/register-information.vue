<template>
  <div class="register-information">
    <div class="information-area w-9/12">
      <LokInput type="email"    placeholder="이메일" name="email"/>
      <LokInput type="text"     placeholder="인증번호" name="password"/>
      <LokInput type="password" placeholder="비밀번호" name="password"/>
      <LokInput type="password" placeholder="비밀번호 확인" name="password"/>
    </div>
    <div class="next-step w-9/12">
      <LokLink to="/auth/register-search-character" class="btn" context="다음단계" />
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
  .register-information
    display: flex
    flex-direction: column
    row-gap: 10vh
    justify-content: center
    align-items: center
    height: 40vh

    .next-step
      display: flex
      height: 40px
      a
        width: 100%


  .information-area
    display: grid
    grid-row-gap: 25px
    //width: 14vw
</style>