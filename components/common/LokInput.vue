<template>
  <div class="lok-input">
    <label :for="id" class="sr-only">{{ $attrs.placeholder }}</label>
    <input :id="id"
           name="email"
           v-bind="$attrs"
           autocomplete="email" required="" :placeholder="$attrs.placeholder" />
  </div>
</template>

<script setup lang="ts">

/*********** Type & Interface **************/


/*********** Normal Instance **************/


/*********** Reactive Instance **************/

defineProps<{
    id: string,
    label?: string
}>()

/*********** Hook **************/


/*********** Function **************/


/*********** ETC... **************/


</script>

