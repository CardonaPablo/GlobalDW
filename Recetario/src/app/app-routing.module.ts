import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaDetallesComponent } from './components/receta-detalles/receta-detalles.component';
import { LoginComponent } from './components/login/login.component';
import { RecetaComponent } from './components/receta/receta.component';
import { RecetasComponent } from './components/recetas/recetas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'receta/:id/edit', component: RecetaComponent },
  { path: 'receta/:id', component: RecetaDetallesComponent },
  { path: 'alimentos', component: RecetasComponent },
  { path: 'alimento/:id', component: RecetaComponent },
  { path: '', pathMatch: "full", redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
