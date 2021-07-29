import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Avis } from 'src/app/model';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
})
export class AvisComponent implements OnInit {
  @Output() avis = new EventEmitter<Avis>();
  Avis = Avis;
  constructor() {}

  @Input() desactiveJaime = false;

  // <app-avis [desactiveDeteste]="false"></app-avis>
  @Input() desactiveDeteste = false;

  ngOnInit(): void {}

  likeOrDislike(avis: Avis) {
    this.avis.emit(avis);
  }
}
