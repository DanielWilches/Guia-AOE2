import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CivilizationsComponent } from './pages/civilizations/civilizations.component';
import { UnitsComponent } from './pages/units/units.component';
import { StructuresComponent } from './pages/structures/structures.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'civilizations', component: CivilizationsComponent},
  {path: 'units', component: UnitsComponent},
  {path: 'structures', component: StructuresComponent},
  {path: 'technologies', component: TechnologiesComponent},
  {path: '', pathMatch: 'full', redirectTo: 'Home'},
  {path: '**', pathMatch: 'full', redirectTo: 'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
