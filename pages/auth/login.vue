<template>
    <div class="login-area">
        <form action="" method="post" class="w-9/12">
            <div class="grid gap-y-5">
                <div class="grid gap-y-5">
                    <LokInput type="email" :id="'email'" placeholder="이메일" name="email"/>
                    <LokInput type="password" :id="'password'" placeholder="비밀번호" name="password"/>
                </div>
                <div class="keep-up-login">
                    <LokIcon icon-name="check-outline" class="w-5 h-5"></LokIcon>
                </div>
                <div>
                    <LokButton type="submit" class="solid w-full">로그인</LokButton>
                </div>
                <div class="flex justify-between">
                    <LokLink to="/auth/registor" context="회원가입"/>
                    <LokLink to="/find/password" context="비밀번호 찾기"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/


/******** Hooks **********/

definePageMeta({
    layout: 'auth-area',
})

/******** Functions **********/

</script>

<style lang="sass" scoped>
.login-area
    display: flex
    justify-content: center
    align-items: center
    width: 100%
</style>














