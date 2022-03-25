import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';

const routes: Routes = [
  {
    path : "",
    component : LoginComponent
  },
  {
    path : "register",
    component : InscriptionComponent
  },
  {
    path : "dashboard",
    component : DashboardComponent,
    children :  [
      {
         path: 'statistique',
         component: StatistiqueComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
