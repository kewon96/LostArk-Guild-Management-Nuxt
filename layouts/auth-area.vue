<script setup lang="ts">
  const title = computed(() => {
    const { path } = useRoute();

    switch (path) {
      case '/auth/register': return '회원가입';
      case '/auth/login': return '로그인';
    }
  })
</script>

<template>
    <main>
        <header>{{ title }}</header>
        <section>
            <slot/>
        </section>
    </main>
</template>

<style lang="sass" scoped>
  main
    position: relative
    background-color: #ffffff
    width: 25vw
    height: 65vh
    min-width: 450px
    min-height: 550px
    left: 50%
    top: 50%
    transform: translate(-50%, 15%)

  header
    text-align: center
    font-size: 2vw
    line-height: 8
</style>