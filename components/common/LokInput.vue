<template>
  <div>
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

<style lang="sass" scoped>

div
  input
    @apply outline-none relative block w-full border-0 ring-2 pl-3 rounded-md py-2 text-gray-900 ring-[#e6e8ec] ring-inset
  &:focus
    @apply ring-2 ring-[$primary-color]


</style>


