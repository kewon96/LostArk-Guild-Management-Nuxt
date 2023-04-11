<template>
    <div class="flex flex-row">
        <LokInput :type="type" :id="id" placeholder="이메일"/>
        <LokButton class="stripe input-merge">인증</LokButton>
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