import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { HeaderComponent } from './component/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './component/detail-article/detail-article.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { ButtonActionComponent } from './component/button-action/button-action.component';
import { NouvelarticleComponent } from './pages/articles/nouvelarticle/nouvelarticle.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtstkArticleComponent } from './component/mvtstk/detail-mvtstk-article/detail-mvtstk-article.component';
import { DetailMvtstkComponent } from './component/mvtstk/detail-mvtstk/detail-mvtstk.component';
import { DetailClientFrsComponent } from './component/detail-client-frs/detail-client-frs.component';
import { PageClientComponent } from './pages/clients/page-client/page-client.component';
import { PageFournisseursComponent } from './pages/fournisseurs/page-fournisseurs/page-fournisseurs.component';
import { NouveauCltFrsComponent } from './component/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailsCmdCltFrsComponent } from './component/details-cmd-clt-frs/details-cmd-clt-frs.component';
import { DetailsCmdComponent } from './component/details-cmd/details-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    StatistiqueComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    ButtonActionComponent,
    NouvelarticleComponent,
    PageMvtstkComponent,
    DetailMvtstkArticleComponent,
    DetailMvtstkComponent,
    DetailClientFrsComponent,
    PageClientComponent,
    PageFournisseursComponent,
    NouveauCltFrsComponent,
    DetailsCmdCltFrsComponent,
    DetailsCmdComponent,
    PageCmdCltFrsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
