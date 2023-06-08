const email = ref<string>();
const password = ref<string>();

export const useRegister = () => {


    return {
        email,
        password
    }
}