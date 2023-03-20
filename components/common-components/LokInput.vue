<template>
  <div>
    <label :for="id" class="sr-only">{{ $attrs.placeholder }}</label>
    <input :id="id"
           name="email"
           v-bind="$attrs"
           class="input-text rounded py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           autocomplete="email" required="" :placeholder="$attrs.placeholder" />
  </div>
</template>

<script setup lang="ts">

/*********** Type & Interface **************/


/*********** Normal Instance **************/


/*********** Reactive Instance **************/


/*********** Hook **************/

defineProps<{
  id: string,
  label?: string
}>()

/*********** Function **************/


/*********** ETC... **************/


</script>

<style lang="scss" scoped>




</style>


