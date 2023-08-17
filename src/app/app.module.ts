import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AddressBarComponent } from './components/address-bar/address-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AtletiComponent } from './components/atleti/atleti.component';
import { TestpointComponent } from './components/testpoint/testpoint.component';
import { EventsComponent } from './components/events/events.component';
import { ServiziComponent } from './components/servizi/servizi.component';
import { BiomeccanicaComponent } from './components/biomeccanica/biomeccanica.component';
import { PreparazioneComponent } from './components/preparazione/preparazione.component';
import { ValFunzionaleComponent } from './components/val-funzionale/val-funzionale.component';
import { ValBaropodometricheComponent } from './components/val-baropodometriche/val-baropodometriche.component';
import { PlantariComponent } from './components/plantari/plantari.component';
import { IndoorCyclingComponent } from './components/indoor-cycling/indoor-cycling.component';
import { FitnessWellnessComponent } from './components/fitness-wellness/fitness-wellness.component';
import { ContattiComponent } from './components/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AddressBarComponent,
    HeaderComponent,
    HomeComponent,
    AtletiComponent,
    TestpointComponent,
    EventsComponent,
    ServiziComponent,
    BiomeccanicaComponent,
    PreparazioneComponent,
    ValFunzionaleComponent,
    ValBaropodometricheComponent,
    PlantariComponent,
    IndoorCyclingComponent,
    FitnessWellnessComponent,
    ContattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
