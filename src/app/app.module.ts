import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
// shared
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
// Comonentes
import { HomeComponent } from './components/home/home.component';
import { CivilizationsComponent } from './components/civilizations/civilizations.component';
import { UnitsComponent } from './components/units/units.component';
import { StructuresComponent } from './components/structures/structures.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ArmorPipe } from './pipes/armor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CivilizationsComponent,
    UnitsComponent,
    CapatilizacionPipe,
    CardsComponent,
    TextSizePipe,
    StructuresComponent,
    TechnologiesComponent,
    ArmorPipe
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
