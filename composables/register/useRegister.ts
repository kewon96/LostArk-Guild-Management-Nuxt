const register = reactive<P_Register>({});


export const useRegister = () => {



    return {
        register,
        // validator,
    }
}

// const validator = () => ({
//     email: yup.string().email().required()
// })

const successInformation = (): boolean => {
    const { characterName, ...infoRegister } = register;
    const values = Object.values(infoRegister);

    // 하나라도 입력값없으면 false
    if(values.length !== 4) return false;
    if(values.some(value => !value)) return false;

    if(infoRegister.authCode !== 'SUCCESS') return false;
    if(infoRegister.password !== infoRegister.passwordMatch) return false;
    if(!checkPassword(infoRegister.password!)) return false;

    return true;
}

/**
 * 비밀번호 정규식 확인
 *
 * 8~20자
 * 특수문자최소1개+소문자+숫자
 * @param password
 */
const checkPassword = (password: string): boolean => {
    const regexp: RegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

    return regexp.test(password)
}