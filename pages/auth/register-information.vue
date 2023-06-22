<template>
  <div class="register-information">
    <div class="information-area w-9/12">
      <LokInputWrapper type="email" v-model="register.email" placeholder="이메일" btn-context="전송" :btn-click="foo" />
      <LokInputWrapper type="text" v-model="register.authCode" placeholder="인증번호" btn-context="확인" :btn-click="foo" />
      <LokInput type="password" v-model="register.password" placeholder="비밀번호" name="password"/>
      <LokInput type="password" v-model="register.passwordMatch" placeholder="비밀번호 확인" name="password"/>
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

const { register } = useRegister(); // 회원가입할 때 필요한 정보
const router = useRouter();

/******** Hooks **********/

definePageMeta({
  layout: 'auth-area',
  middleware: 'register',
})


/******** Functions **********/

const foo = () => {
  useFetch(`/api/foo`)
}


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

    .lok-input-button-set
      display: flex

</style>