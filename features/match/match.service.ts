'use client'
import HttpService from '@/lib/services/http.service'
import { Match } from './match.types'

class MatchApiService extends HttpService {
    getMatchById(id: string) {
        return this.get<Match>(`/rooms/${id}`)
    }

    getMatches() {
        return this.get<Match[]>(`/rooms`)
    }
}

const matchApi = new MatchApiService()

export default matchApi
