<template>
  <main>
    <header>
      <div class="go-login" v-if="!isLoginPage">
        <LokLink to="/auth/login" context="로그인" />
      </div>
      <h1>{{ title }}</h1>
    </header>
    <section>
      <slot/>
    </section>
  </main>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

// 로그인페이지 여부
const isLoginPage = computed<boolean>(() => useRoute().path.includes('login'));

// 상단에 보여지는 제목
const title = computed(() => {
  const { path } = useRoute();

  switch (path) {
    case '/auth/register-information':
      return '기본정보 입력하기';
    case '/auth/login':
      return '로그인';
    case '/auth/register-search-character':
      return '캐릭터 검색';
  }
})

/******** Hooks **********/


/******** Functions **********/


</script>

<style lang="sass" scoped>
  main
    position: relative
    background-color: #ffffff
    width: 25vw
    height: 80vh
    min-width: 450px
    min-height: 550px
    left: 50%
    top: 50%
    transform: translate(-50%, 15%)
    overflow-y: auto

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

  section
    height: 40vh
</style>