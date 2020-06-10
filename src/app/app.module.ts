import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
// librerias externas
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// importaciones de nuestra aplicacion
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// creado por daniel pireto wilches
// pipes
import { CapatilizacionPipe } from './pipes/capatilizacion.pipe';
import { TextSizePipe } from './pipes/text-size.pipe';
import { ArmorPipe } from './pipes/armor.pipe';
import { ArrayNullPipe } from './pipes/array-null.pipe';
//  componentes shared
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrosComponent } from './components/erros/erros.component';
// Pages componentes
import { HomeComponent } from './pages/home/home.component';
import { CivilizationsComponent } from './pages/civilizations/civilizations.component';
import { UnitsComponent } from './pages/units/units.component';
import { StructuresComponent } from './pages/structures/structures.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { ObjetosOfArrayPipe } from './pipes/objetos-of-array.pipe';



@NgModule({
  declarations: [
    AppComponent,
    // pipes
    CapatilizacionPipe,
    ArmorPipe,
    TextSizePipe,
    // componentes shared
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    CardComponent,
    // componentes pages
    HomeComponent,
    CivilizationsComponent,
    UnitsComponent,
    StructuresComponent,
    TechnologiesComponent,
    LoadingComponent,
    ArrayNullPipe,
    ErrosComponent,
    ObjetosOfArrayPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
