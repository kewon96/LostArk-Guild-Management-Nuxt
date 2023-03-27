<template>
  <div class="flex min-h-full min-w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-5/12">
      <form action="" method="post">
        <div class="grid gap-y-5">
          <div class="grid gap-y-2">
            <LokInput type="email" :id="'email'" placeholder="이메일" name="email" />
            <LokInput type="password" :id="'password'" placeholder="비밀번호" name="password" />
          </div>
          <div class="keep-up-login">
            <LokIcon icon-name="check-outline" class="w-5 h-5"></LokIcon>
          </div>
          <div>
            <button type="submit" class="btn w-full">로그인</button>
          </div>
          <div class="flex justify-between">
            <NuxtLink to="/registor">회원가입</NuxtLink>
            <NuxtLink to="/find/password">비밀번호 찾기</NuxtLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/


/******** Hooks **********/


/******** Functions **********/

</script>