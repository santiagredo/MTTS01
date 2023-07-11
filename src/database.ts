export interface UserModel  {
    email: string | null,
    username: string | null,
    password: string | null 
};

export const defaultUser: UserModel = {
    email: null,
    username: null,
    password: null
};


// export const usersDataba: UserModel[] = [];
export const usersDatabase: UserModel[] = [{
    email: "email@email.com",
    username: "admin",
    password: "admin"
}];


export type ResetCodeModel = [number, UserModel];

export const resetCodes: ResetCodeModel[] = [];