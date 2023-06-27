type Register = {
    email: string,
    authCode: string,
    isAuth: email_auth,
    password: string,
    passwordMatch: string,
    characterName: string,
};

type email_auth = 'NOT_REQUEST' | 'WAITING' | 'SUCCESS'

type InfoRegister = Omit<P_Register, 'characterName'>;
type P_Register = Partial<Register>