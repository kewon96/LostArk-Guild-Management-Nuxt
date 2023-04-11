<template>
  <div>
    <header class="shadow-sm bg-white border-solid border-2 border-b-[#9C9EA0]">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Lok Guild</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="flex min-h-full items-center justify-center py-44 px-4 sm:px-6 lg:px-8 container mx-auto p-4 min-w-full">
      <slot />
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

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>