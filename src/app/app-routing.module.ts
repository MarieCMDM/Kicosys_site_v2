import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AtletiComponent } from './components/atleti/atleti.component';
import { TestpointComponent } from './components/testpoint/testpoint.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Kicosys - Home' },
  { path: 'atleti', component: AtletiComponent, title: 'Kicosys - Atleti'},
  { path: 'testpoint', component: TestpointComponent, title: 'Kicosys - Test Point'},
  { path: 'eventi', component: EventsComponent, title: 'Kicosys - Events'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
