import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelarticleComponent } from './pages/articles/nouvelarticle/nouvelarticle.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { PageClientComponent } from './pages/clients/page-client/page-client.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';

const routes: Routes = [
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "register",
    component : InscriptionComponent
  },
  {
    path : "",
    component : DashboardComponent,
    children :  [
      {
         path: 'statistique',
         component: StatistiqueComponent
      },
      {
        path: 'articles',
        component: PageArticleComponent
     },
     {
      path: 'nouvelarticle',
      component: NouvelarticleComponent
     },
     {
      path: 'mvtstk',
      component: PageMvtstkComponent
     } ,
     {
      path: 'clients',
      component: PageClientComponent
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
