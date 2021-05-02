import { User } from "./user";

export interface Room {
    name: string;
    id: string;
    members: User[];
    cards: any[];
    votingRound: number;
    votingHistory: any[];
}