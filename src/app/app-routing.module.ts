import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarComponent } from './pages/agendar/agendar.component';
import { AgendadosComponent } from './pages/agendados/agendados.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'agendar', component: AgendarComponent},
  {path: 'agendados', component: AgendadosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
