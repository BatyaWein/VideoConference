import { makeAutoObservable } from "mobx"

export enum Role {
    Judge = 'דובר',
    ProvokedParty = 'צד עורר',
    RespondingParty = 'צד משיב'
}
export class Participant {

    private _id: number

    private _name: string

    private _title: string

    private _description: string

    private _image: string

    private _role: Role

    private _isMute: boolean

    private _isCamera: boolean

    private _isShareScreen: boolean

    constructor(participant: Participant) {
        this._id = participant.id
        this._name = participant.name
        this._title = participant.title
        this._description = participant.description
        this._image = participant.image
        this._role = participant.role
        this._isMute = participant.isMute
        this._isCamera = participant.isCamera
        this._isShareScreen = participant.isShareScreen
        makeAutoObservable(this)
    }

    get id(): number {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get title(): string {
        return this._title
    }

    get description(): string {
        return this._description
    }

    get image(): string {
        return this._image
    }

    get role(): Role {
        return this._role
    }

    get isMute(): boolean {
        return this._isMute
    }

    get isShareScreen(): boolean {
        return this._isShareScreen
    }

    get isCamera(): boolean {
        return this._isCamera
    }


    set id(value: number) {
        this._id = value
    }

    set name(value: string) {
        this._name = value
    }

    set title(value: string) {
        this._title = value
    }

    set description(value: string) {
        this._description = value
    }

    set image(value: string) {
        this._image = value
    }

    set role(value: Role) {
        this._role = value
    }

    set isMute(value: boolean) {
        this._isMute = value
    }

    set isShareScreen(value: boolean) {
        this._isShareScreen = value
    }

    set isCamera(value: boolean) {
        this._isCamera = value
    }
}