<template>
  <div class="lok-input">
    <label  class="sr-only">{{ $attrs.placeholder }}</label>
    <input
           v-bind="$attrs"
           autocomplete="email" required="" :placeholder="$attrs.placeholder" />
  </div>
</template>

<script setup lang="ts">

/*********** Type & Interface **************/


/*********** Normal Instance **************/


/*********** Reactive Instance **************/

defineProps<{
    label?: string
}>()

/*********** Hook **************/


/*********** Function **************/


/*********** ETC... **************/


</script>

