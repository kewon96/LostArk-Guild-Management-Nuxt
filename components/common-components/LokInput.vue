<template>
  <div class="input-container">
    <label :for="id" class="sr-only">{{ placeholder }}</label>
    <input :id="id"
           name="email"
           v-bind="$attrs"
           class="rounded py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           autocomplete="email" required="" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">

/*********** Type & Interface **************/


/*********** Normal Instance **************/


/*********** Reactive Instance **************/


/*********** Hook **************/

defineProps<{
  id: string,

  placeholder?: string,
}>()

/*********** Function **************/


/*********** ETC... **************/


</script>

<style lang="scss" scoped>

.input-container {
  input {
    position: relative;
    display: block;
    width: 100%;
    border-width: 0;
    padding-left: 10px;
  }
}

</style>


