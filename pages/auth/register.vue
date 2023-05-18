<template>
<!--  <div class="w-3/12">
      <form action="" method="post">
          <div class="grid gap-y-7">
              <div class="flex flex-row gap-3">
                  <LokInput style="width: 18vw" :type="'email'" :id="'email'" placeholder="이메일"/>
                  <LokButton class="stripe input-merge w-3/12">인증</LokButton>
              </div>
              <LokInput type="text" :id="'authCode'" placeholder="인증번호" name="authCode"/>
              <LokInput type="password" :id="'password'" placeholder="비밀번호" name="password"/>
              <LokInput type="password" :id="'passwordChk'" placeholder="비밀번호 확인" name="passwordChk"/>
          </div>
      </form>
  </div>-->

  <div class="register-area">
    <div class="grid gap-y-5">
      <div class="grid gap-y-5">
        <LokInput type="email" :id="'email'" placeholder="이메일" name="email"/>
        <LokInput type="password" :id="'password'" placeholder="비밀번호" name="password"/>
      </div>
      <div class="keep-up-login">
        <LokIcon icon-name="check-outline" class="w-5 h-5"></LokIcon>
      </div>
      <div>
        <LokButton type="submit" class="solid w-full">로그인</LokButton>
      </div>
      <div class="flex justify-between">
        <LokLink to="/auth/registor" context="회원가입"/>
        <LokLink to="/find/password" context="비밀번호 찾기"/>
      </div>
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

<style scoped>

</style>