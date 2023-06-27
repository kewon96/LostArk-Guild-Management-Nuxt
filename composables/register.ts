const register = reactive<P_Register>({});
const infoRegister = reactive<InfoRegister>({});

export const useRegister = () => {

    const extendsInfoRegister = () => {
        Object.assign<InfoRegister, P_Register>(infoRegister, register);
    }

    return {
        register
    }
}