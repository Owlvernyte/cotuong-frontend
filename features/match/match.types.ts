import { User } from '../user/user.types'

export type Match = {
    id: string
    status: MatchStatus
    matchDate: string
    userMatches: UserMatch[]
}

export type UserMatch = User & {
    result: MatchResult
}

export enum MatchStatus {
    Stop,
    Play,
}

export enum MatchResult {
    None,
    Win,
    Lose,
    Draw,
}
