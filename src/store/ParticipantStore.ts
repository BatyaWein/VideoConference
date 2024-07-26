import { makeAutoObservable } from 'mobx'
import { Participant, Role } from '../entities/Participant'

export default class ParticipantStore {
  judges: Participant[] = []
  participants: Participant[] = []

  constructor() {
    makeAutoObservable(this)
    this.initializeStore()
  }

  initializeStore() {
    //ToDo call api meeting participants

    this.judges.push(
      new Participant({
        id: 784,
        name: 'חיים כהן',
        title: 'כבוד השופט',
        description: 'וועדת עורר לענייני קורונה',
        image: 'https://res.cloudinary.com/globes/image/upload/t_desktop_article_content_header_800%2A392/v1596794658/old/1590685.jpg',
        role: Role.Judge,
        isMute: false,
        isCamera: true,
        isShareScreen: false
      } as Participant)
    )

    this.participants.push(
      new Participant({
        id: 2027,
        name: 'חנוך כ"ץ',
        title: 'עו"ד',
        description: 'צד עורר',
        image: 'https://www.ophirlaw.com/wp-content/uploads/2021/06/GuyOfir-20-1-scaled.jpg',
        role: Role.ProvokedParty,
        isMute: true,
        isCamera: true,
        isShareScreen: false
      } as Participant),
      new Participant({
        id: 1918,
        name: 'ארז גבאי',
        title: 'עו"ד',
        description: 'צד משיב',
        image: 'https://b-malka.co.il/wp-content/uploads/2021/07/21055961_1389790541135270_6047310419590704715_o-e1621781095545.jpg',
        role: Role.RespondingParty,
        isMute: true,
        isCamera: true,
        isShareScreen: false
      } as Participant)
    )
  }
}