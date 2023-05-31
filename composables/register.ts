export const useRegister = () => {
    const email = ref<string>();
    const password = ref<string>();

    return {
        email,
        password
    }
}