const register = reactive<Register>({
    email: '',
    authCode: '',
    password: '',
    passwordMatch: '',
    characterName: '',
});

export const useRegister = () => {


    return {
        register
    }
}