<template>
    <div class="lok-input-wrapper">
        <LokInput class="radius-right-none w-4/5" @input="$emit('update:modelValue', $event.target.value)" :type="type" :placeholder="placeholder" />
        <LokButton class="radius-left-none w-1/5" @click="btnClick">{{ btnContext }}</LokButton>
    </div>
</template>

<script lang="ts" setup>

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/


/******** Hooks **********/

withDefaults(defineProps<{
  modelValue?: string,
  type?: string,
  placeholder: string,
  btnContext: string,
  btnClick: Function
}>(), {
  type: 'text'
});

defineEmits<{
  (e: 'update:modelValue', value?: string): void
}>();

/******** Functions **********/


</script>

<style lang="sass" scoped>

.lok-input-wrapper
  display: flex

</style>