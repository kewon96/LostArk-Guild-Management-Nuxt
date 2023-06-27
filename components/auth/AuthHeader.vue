<template>
  <header>
    <div class="go-login" v-if="!isLoginPage">
      <LokLink to="/auth/login" context="로그인" />
    </div>
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">

// 로그인페이지 여부
const isLoginPage = computed<boolean>(() => useRoute().path.includes('login'));

// 상단에 보여지는 제목
const title = computed<string>(() => {
  const { path } = useRoute();

  switch (path) {
    case '/auth/register-information':
      return '기본정보 입력하기';
    case '/auth/login':
      return '로그인';
    case '/auth/register-search-character':
      return '캐릭터 검색';
    default: return '';
  }
})

</script>

<style lang="sass" scoped>

header
  .go-login
    height: 5vh
    display: flex
    align-items: center
    font-size: 18px
    padding-left: 5px
  h1
    text-align: center
    font-size: 4vh
    padding: 3em 0

</style>