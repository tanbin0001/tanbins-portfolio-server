




export type TRegisterUser = {
    username: string;
    email: string;
    password: string;
    role:  'user' | 'superAdmin' | 'manager' | 'seller';
 

}

export type TUpdateUserRole = {
    role:      'manager' | 'seller';
    branch:string;
 

}
export type TLoginUser = {
    username: string;
    password: string;
}