import {RouteRecordName} from "vue-router";
import {useRegister} from "~/composables/register/useRegister";

// 해당 목록으로 이동 시 유효성검사 Pass
const ALWAYS_APPLY_TO_ROUTE: RouteRecordName[] = ['auth-register-information'];

/**
 * to: 도착하는 Route
 * from: 출발하는 Route
 */
export default defineNuxtRouteMiddleware((to, from) => {
    const { name: toName, path: toPath } = to;
    const { name: fromName, path: fromPath } = from;
    
    // 현 화면에서 Reloading하는 경우 별다른거 안함
    if(toName === fromName) return/* abortNavigation()*/;
    if(ALWAYS_APPLY_TO_ROUTE.includes(toName!)) return/* abortNavigation()*/;

    // switch (fromName) {
    //     case 'auth-register-information': {
    //         if(!useRegister().successInformation()) {
    //             return abortNavigation();
    //         }
    //     }
    // }
})

/**
 * 캐릭터이동에 대한 유효성검사
 *
 * 기입한 정보자체가 없는 경우 false
 * 하나라도 기입을 안했다면 false
 *
 */
function validationRegisterInfo(): boolean {
    const { register } = useRegister();
    const { characterName, ...infoRegister } = register;
    const values = Object.values(infoRegister);

    if(values.length !== 4) return false;
    return !values.some(value => !value);


}