<template>
  <div class="lok-input">
    <input v-bind="$attrs"
           :placeholder="$attrs.placeholder" />
    <!--
           @input="$emit('update:modelValue', $event.target.value)"
           autocomplete="email"
    -->
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">

/*********** Type & Interface **************/


/*********** Normal Instance **************/


/*********** Hook **************/

const props = withDefaults(defineProps<{
  name: string,
  type: string,
  modelValue?: string,
}>(), {
  name: 'text',
  type: 'text',
})


/*********** Reactive Instance **************/

const { value, errorMessage } = useField(() => props.name);



/*********** Function **************/


/*********** ETC... **************/


</script>

