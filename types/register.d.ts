type Register = {
    email: string,
    authCode: string,
    password: string,
    passwordMatch: string,
    characterName: string,
};

type InfoRegister = Partial<Omit<Register, 'characterName'>>;
type P_Register = Partial<Register>