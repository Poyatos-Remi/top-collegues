import {Injectable} from '@angular/core';
import {Collegue, Avis, Vote, CreerVote} from '../model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  listerCollegues(): Promise<Collegue[]> {
    return fetch(environment.urlResourceCollegue)
      .then(response => response.json())
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Promise<Collegue> {
    const creerVote: CreerVote = {
      pseudo: collegue.pseudo,
      avis
    };
    return fetch(environment.urlResourceVote, {
      method: 'POST',
      body: JSON.stringify(creerVote),
      headers: {'Content-Type': 'application/json'}
    }).then(response => response.json());
  }

  listerVotes(): Promise<Vote[]> {
    return fetch(environment.urlResourceVote)
      .then(response => response.json())
  }

}
