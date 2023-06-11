<template>
  <div class="lok-input">
    <input v-bind="$attrs"
           @input="$emit('update:modelValue', $event.target.value)"
           autocomplete="email" :placeholder="$attrs.placeholder" />
  </div>
</template>

<script setup lang="ts">

/*********** Type & Interface **************/


/*********** Normal Instance **************/


/*********** Reactive Instance **************/



/*********** Hook **************/

defineProps<{
  modelValue?: string,
}>()


/*********** Function **************/


/*********** ETC... **************/


</script>

