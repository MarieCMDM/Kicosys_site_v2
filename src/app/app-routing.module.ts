import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Kicosys - Home' },
  { path: 'atleti', component: AtletiComponent, title: 'Kicosys - Atleti'},
  { path: 'testpoint', component: TestpointComponent, title: 'Kicosys - Test Point'},
  { path: 'eventi', component: EventsComponent, title: 'Kicosys - Events'},
  { path: 'servizi', component: ServiziComponent, title: 'Kicosys - Servizi'},
  { path: 'servizi/biomeccanica_applicata', component: BiomeccanicaComponent, title: 'Kicosys - Biomeccanica'},
  { path: 'servizi/preparazioni_atletiche', component: PreparazioneComponent, title: 'Kicosys - Preparazioni Atletiche'},
  { path: 'servizi/valutazione_funzionale', component: ValFunzionaleComponent, title: 'Kicosys - Valutazione Funzionale'},
  { path: 'servizi/valutazione_baropodometriche', component: ValBaropodometricheComponent, title: 'Kicosys - Valutazioni Baropodometriche'},
  { path: 'servizi/progettazioni_plantari', component: PlantariComponent, title: 'Kicosys - Progettazioni Plantari'},
  { path: 'servizi/indoor_cycling_program', component: IndoorCyclingComponent, title: 'Kicosys - Indoor Cycling Program'},
  { path: 'servizi/fitness_wellness_personal', component: FitnessWellnessComponent, title: 'Kicosys - Fitness, Wellness e Personal Trainer'},
  { path: 'contatti', component: ContattiComponent, title: 'Kicosys - Contatti'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
