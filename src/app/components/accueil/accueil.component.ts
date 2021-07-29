import { Component, OnInit, ViewChild } from '@angular/core';
import { ListeColleguesComponent } from '../liste-collegues/liste-collegues.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html'
})
export class AccueilComponent implements OnInit {
  @ViewChild('list') list?: ListeColleguesComponent 
  constructor() { }

  ngOnInit(): void {
  }

  refresh() {
    this.list?.refresh()
  }
}
