import { makeAutoObservable } from "mobx"
import ParticipantStore from "./ParticipantStore"

export class MainStore {

    participantStore: ParticipantStore = new ParticipantStore()

    constructor() {
        makeAutoObservable(this)
    }
}