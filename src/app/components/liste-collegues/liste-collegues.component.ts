import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Collegue } from '../../model'

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html'
})
export class ListeColleguesComponent implements OnInit {
  collegues$!: Promise<Collegue[]>;
  
  constructor(private dataSrv: DataService) {
  }
  
  refresh() {
    this.collegues$ = this.dataSrv.listerCollegues()
  }

  ngOnInit(): void {
    this.refresh();
  }
}
