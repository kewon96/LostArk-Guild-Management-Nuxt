<template>
    <div class="lok-input-wrapper">
        <LokInput class="w-4/5" :type="type" :placeholder="placeholder" />
        <LokButton class="w-1/5" @click="btnClick">{{ btnContext }}</LokButton>
    </div>
</template>

<script lang="ts" setup>

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

withDefaults(defineProps<{
  type?: string,
  placeholder: string,
  btnContext: string,
  btnClick: Function
}>(), {
  type: 'text'
})

/******** Hooks **********/


/******** Functions **********/


</script>

<style lang="sass" scoped>

.lok-input-wrapper
  display: flex

</style>