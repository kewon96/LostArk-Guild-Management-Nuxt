import {RouteLocationNormalized} from "vue-router";

/**
 * to: 도착하는 Route
 * from: 출발하는 Route
 */
export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to, from)
    const { name: toName } = to;
    const { name: fromName } = from;
    
    // 현 화면에서 Reloading하는 경우 별다른거 안함
    if(toName === fromName) return;
    
    switch (toName) {
        case 'auth-register-search-character': return navigateTo(moveToSearchCharacter(to, from));
    }
})

/**
 * 캐릭터입력으로 갈 때 동작
 *
 * register-infomation에서 왔을 때만 전용 검사를 진행하며
 * 그 외의 경우는 이전화면으로 redirect시킨다.
 * @param to
 * @param from
 */
function moveToSearchCharacter(to: RouteLocationNormalized, from: RouteLocationNormalized): string | undefined {
    const { register } = useRegister();
    const { name: toName, path: toPath } = to;
    const { name: fromName, path: fromPath } = from;

    // 기본정보입력에서
    if(fromName !== 'auth-register-information' || isEmpty<P_Register>(register)) {
        return toPath;
    }

}