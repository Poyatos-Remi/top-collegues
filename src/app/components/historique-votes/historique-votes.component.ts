import { Component, OnInit } from '@angular/core';
import { Avis, Vote } from 'src/app/model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
})
export class HistoriqueVotesComponent implements OnInit {
  votes!: Vote[];
  Avis = Avis;
  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.refresh()
  }

  // refresh() {
  //   this.dataSrv.listerVotes()
  //     .then(votes => this.votes = votes);
  // }

  refresh() {
    this.dataSrv.listerVotes()
      .subscribe(votes => this.votes = votes);
  }

  removeElement(indexVoteASupprimer: number) {
    this.votes.splice(indexVoteASupprimer, 1);
  }
}
