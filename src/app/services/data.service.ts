import {Injectable} from '@angular/core';
import {Collegue, Avis, Vote, CreerVote} from '../model';
import {environment} from "../../environments/environment";
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  voteEffectue = new Subject<Vote>();

  constructor(private _http:HttpClient) {
  }

  publierUnNouveauVote(vote: Vote) {
    this.voteEffectue.next(vote);
  }

  get voteEffectueObs() {
    return this.voteEffectue.asObservable();
  }

  // listerCollegues(): Promise<Collegue[]> {
  //   return fetch(environment.urlResourceCollegue)
  //     .then(response => response.json())
  // }

  listerCollegues(): Observable<Collegue[]>{
    return this._http.get<Collegue[]>(environment.urlResourceCollegue);
  }

  // donnerUnAvis(collegue: Collegue, avis: Avis): Promise<Collegue> {
  //   const creerVote: CreerVote = {
  //     pseudo: collegue.pseudo,
  //     avis
  //   };
  //   return fetch(environment.urlResourceVote, {
  //     method: 'POST',
  //     body: JSON.stringify(creerVote),
  //     headers: {'Content-Type': 'application/json'}
  //   }).then(response => response.json());
  // }

  donnerUnAvis(collegue: Collegue, avis: Avis) {
    const creerVote: CreerVote = {
      pseudo: collegue.pseudo,
      avis
    };

    return this._http.post<Collegue>(environment.urlResourceVote, creerVote)
        .pipe(
            tap(colApresVote => {
              this.publierUnNouveauVote({
                score: colApresVote.score,
                collegue: colApresVote,
                avis
              });
            }
        ));
  }


  // listerVotes(): Promise<Vote[]> {
  //   return fetch(environment.urlResourceVote)
  //     .then(response => response.json())
  // }

  listerVotes() {
    return this._http.get<Vote[]>(environment.urlResourceVote);
  }

}
