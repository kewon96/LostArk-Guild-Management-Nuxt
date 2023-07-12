<template>
  <div class="lok-input">
    <input v-bind="$attrs"
           :placeholder="$attrs.placeholder" />
    <!--
           @input="$emit('update:modelValue', $event.target.value)"
           autocomplete="email"
    -->
  </div>
</template>

<script setup lang="ts">


/*********** Type & Interface **************/


/*********** Normal Instance **************/


/*********** Hook **************/

const props = withDefaults(defineProps<{
  type: string,
  modelValue?: string,
}>(), {
  type: 'text',
})


/*********** Reactive Instance **************/

// const { value, errorMessage } = useField('email', props.validate);



/*********** Function **************/


/*********** ETC... **************/


</script>

