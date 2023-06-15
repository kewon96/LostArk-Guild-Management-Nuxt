type Register = {
    email: string,
    authCode: string,
    password: string,
    passwordMatch: string,
    characterName: string,
};

type P_Register = Partial<Register>