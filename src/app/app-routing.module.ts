import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screens/login-screens.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { PerfilComponent } from './screens/perfil/perfil.component';
import { PoliticaPrivacidadScreenComponent } from './screens/politica-privacidad-screen/politica-privacidad-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { JuegoMotoScreenComponent } from './screens/juego-moto-screen/juego-moto-screen.component';
import { CarreraTerminadaScreenComponent } from './screens/carrera-terminada-screen/carrera-terminada-screen.component';


const routes: Routes = [
  {path: "", component: LoginScreenComponent, pathMatch: 'full'},
  {path: "registro", component: RegistroScreenComponent, pathMatch: 'full'},
  {path: "home", component: HomeScreenComponent, pathMatch: 'full'},
  {path: "bases-promocion", component: BasesPromocionScreenComponent, pathMatch: 'full'},
  {path: "perfil", component: PerfilComponent, pathMatch: 'full'},
  {path: "politica-privacidad", component: PoliticaPrivacidadScreenComponent, pathMatch: 'full'},
  {path: "terminos-condiciones", component: TerminosCondicionesScreenComponent, pathMatch: 'full'},
  {path: "instrucciones", component: InstruccionesScreenComponent, pathMatch: 'full'},
  {path: "nuevo-look", component: NuevoLookScreenComponent, pathMatch: 'full'},
  {path: "juego-moto", component: JuegoMotoScreenComponent, pathMatch: 'full'},
  {path: "carrera-terminada", component: CarreraTerminadaScreenComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
