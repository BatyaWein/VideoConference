import { makeAutoObservable } from "mobx"

export class Participant {

    private _name: string

    private _description: string

    private _image: string

    constructor(participant: Participant) {
        this._name = participant.name
        this._description = participant.description
        this._image = participant.image
        makeAutoObservable(this)
    }

    get name(): string {
        return this._name
    }

    get description(): string {
        return this._description
    }

    get image(): string {
        return this._image
    }

    set name(value: string) {
        this._name = value
    }
    
    set description(value: string) {
        this._description = value
    }

    set image(value: string) {
        this._name = value
    }
}