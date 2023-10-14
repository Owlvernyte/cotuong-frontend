export type User = {
    id: string
    userName: string
    email: string
    fullName?: string
}

export type Password = {
    password: string
    confirmPassword: string
}

export type RegisterRequest = Omit<User, 'id'> & Password

export type LoginRequest = {
    userNameOrEmail: string
    password: string
}

export type AuthUserResponse = User & {
    token?: string
    tokenExpire?: Date
}
