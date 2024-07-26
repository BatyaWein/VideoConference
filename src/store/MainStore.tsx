import { makeAutoObservable } from "mobx"
import ParticipantStore from "./ParticipantStore"
import { Meeting } from "../entities/Meeting"

export class MainStore {

    //TODO: get user after login
    userId: number = 2027

    //TODO: call api meeting
    meeting: Meeting = new Meeting({
        id: 52,
        name: 'ועדת עורר לעניני קורונה',
        description: 'השתתפות בהוצאות קבועות',
        caseNumber: '6-1949-02-22'
    } as Meeting)

    participantStore: ParticipantStore = new ParticipantStore()

    constructor() {
        makeAutoObservable(this)
    }

    get user() {
        return [... this.participantStore.judges, ...this.participantStore.participants].find(user => user.id === this.userId)
    }
}