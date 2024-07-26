import { makeAutoObservable } from "mobx"

export class Meeting {
    private _id: number

    private _name: string

    private _description: string

    private _caseNumber: string

    constructor(meeting: Meeting) {
        this._id = meeting.id
        this._name = meeting.name
        this._description = meeting.description
        this._caseNumber = meeting.caseNumber
        makeAutoObservable(this)
    }

    get id(): number {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get description(): string {
        return this._description
    }
    
    get caseNumber(): string {
        return this._caseNumber
    }


    set id(value: number) {
        this._id = value
    }

    set name(value: string) {
        this._name = value
    }

    set description(value: string) {
        this._description = value
    }

    set caseNumber(value: string) {
        this._caseNumber = value
    }
}