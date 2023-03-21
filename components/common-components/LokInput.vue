<template>
  <div>
    <label :for="id" class="sr-only">{{ $attrs.placeholder }}</label>
    <input :id="id"
           name="email"
           v-bind="$attrs"
           class="input-text"
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


