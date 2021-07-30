import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Collegue, Avis } from '../../model';
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],
})
export class CollegueComponent implements OnInit {
  @Input() collegue?: Collegue;
  err = false;

  constructor(private dataSrv: DataService) {}

  ngOnInit(): void {}

  // changeScore(avis: Avis) {
  //   if (this.collegue) {
  //     this.err = false;
  //     this.dataSrv.donnerUnAvis(this.collegue, avis)
  //       .then(col => this.collegue = col)
  //       .catch(()=> this.err = true);
  //   }
  // }

  changeScore(avis: Avis) {
    if (this.collegue) {
        this.err = false;
        this.dataSrv.donnerUnAvis(this.collegue, avis)
            // abonné 1
            .subscribe(
                col => this.collegue = col,
                () => this.err = true);
    }
}

  get desactiverJaime(): boolean {
    return this.collegue != undefined && this.collegue.score >= 1000;
  }

  get desactiverDeteste() {
    return this.collegue != undefined && this.collegue.score <= -1000;
  }
}
