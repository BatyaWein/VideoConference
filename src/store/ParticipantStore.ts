import { makeAutoObservable } from 'mobx'
import { Participant } from '../entities/Participant'

export default class ParticipantStore {
  judges: Participant[] = [];
  participants: Participant[] = [];

  constructor() {
    makeAutoObservable(this);
    this.initializeStore();
  }

  initializeStore() {
    // Initialize judges
    this.judges.push(
      new Participant({
        name: 'שופט א',
        description: 'תיאור של שופט א',
        image: 'https://res.cloudinary.com/globes/image/upload/t_desktop_article_content_header_800%2A392/v1596794658/old/1590685.jpg'
      } as Participant)
    );

    // Initialize participants
    this.participants.push(
      new Participant({
        name: 'משתתף א',
        description: 'תיאור של משתתף א',
        image: 'https://www.ophirlaw.com/wp-content/uploads/2021/06/GuyOfir-20-1-scaled.jpg'
      } as Participant),
      new Participant({
        name: 'משתתף ב',
        description: 'תיאור של משתתף ב',
        image: 'https://b-malka.co.il/wp-content/uploads/2021/07/21055961_1389790541135270_6047310419590704715_o-e1621781095545.jpg'
      } as Participant)
    );
  }
}