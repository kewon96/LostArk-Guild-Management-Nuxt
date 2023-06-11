<template>
  <form action="" method="post" class="login">
    <div class="grid gap-y-5 w-9/12">
      <div class="grid gap-y-5">
        <LokInput type="email" v-model="loginInfo.email" placeholder="이메일" name="email"/>
        <LokInput type="password" v-model="loginInfo.password" placeholder="비밀번호" name="password"/>
      </div>
      <div class="keep-up-login">
        <LokIcon icon-name="check-outline" class="w-5 h-5"></LokIcon>
      </div>
      <div>
        <LokButton type="submit" class="solid w-full">로그인</LokButton>
      </div>
      <div class="flex justify-between">
        <LokLink to="/auth/register-information" context="회원가입"/>
        <LokLink to="/find/password" context="비밀번호 찾기"/>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/

interface LoginInfo {
  email: string,
  password: string
}

/******** Reactive Instance **********/

const loginInfo = reactive<LoginInfo>({});

/******** Hooks **********/

definePageMeta({
    layout: 'auth-area',
})

/******** Functions **********/

</script>

<style lang="sass" scoped>
.login
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 40vh
</style>














