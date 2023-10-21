'use client'
import HttpService from '@/lib/services/http.service'
import { Match } from './match.types'

class MatchApiService extends HttpService {
    getMatchById(id: string) {
        return this.get<Match>(`/matches/${id}`)
    }

    getMatches() {
        return this.get<Match[]>(`/matches`)
    }
}

const matchApi = new MatchApiService()

export default matchApi
