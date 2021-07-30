import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AvisComponent } from './components/avis/avis.component';
import { CollegueComponent } from './components/collegue/collegue.component';
import { ListeColleguesComponent } from './components/liste-collegues/liste-collegues.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { HistoriqueVotesComponent } from './components/historique-votes/historique-votes.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    HistoriqueVotesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
