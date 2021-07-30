import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue = {
    pseudo: '',
    nom: '',
    prenom: '',
    photo_url: ''
  };

  constructor() { }

  ngOnInit(): void {
  }



}
