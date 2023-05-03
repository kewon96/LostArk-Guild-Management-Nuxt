<template>
  <div class="w-3/12">
      <form action="" method="post">
          <div class="grid gap-y-7">
<!--              <LokInputWrapper se></LokInputWrapper>-->
              <div class="flex flex-row gap-3">
                  <LokInput style="width: 18vw" :type="'email'" :id="'email'" placeholder="이메일"/>
                  <LokButton class="stripe input-merge w-3/12">인증</LokButton>
              </div>
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