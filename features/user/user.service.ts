'use client'
import {
    RegisterRequest,
    AuthUserResponse,
    User,
    LoginRequest,
} from './user.types'
import HttpService from '@/lib/services/http.service'

class UserApiService extends HttpService {
    register(data: RegisterRequest) {
        return this.post<AuthUserResponse>('/users', data)
    }

    login(data: LoginRequest) {
        return this.post<AuthUserResponse>('/users/login', data)
    }

    getUserById(id: string) {
        return this.get<User>(`/users/${id}`)
    }

    getUsers() {
        return this.get<User[]>(`/users`)
    }
}

const userApi = new UserApiService()

export default userApi
