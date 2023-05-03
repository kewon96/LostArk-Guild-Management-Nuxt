<template>
    <div class="lok-input-wrapper">
        <LokInput class="w-3/4" :type="type" :id="id" placeholder="이메일"/>
        <LokButton class="stripe input-merge w-1/4">인증</LokButton>
    </div>
</template>

<script lang="ts" setup>


/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

defineProps<{
    type: string,
    id: string,
}>()

/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped>

</style>