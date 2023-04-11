<template>
  <div class="w-5/12">
      <form action="" method="post">
          <div class="grid gap-y-7">
              <LokInputWrapper se></LokInputWrapper>
              <LokInput type="text" :id="'authCode'" placeholder="인증번호" name="authCode"/>
              <LokInput type="password" :id="'password'" placeholder="비밀번호" name="password"/>
              <LokInput type="password" :id="'passwordChk'" placeholder="비밀번호 확인" name="passwordChk"/>
          </div>
      </form>
  </div>
</template>

<script setup lang="ts">


/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/


/******** Hooks **********/


/******** Functions **********/



</script>

<style scoped>

</style>