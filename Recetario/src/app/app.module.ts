import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RecetaComponent } from './components/receta/receta.component';
import { AlimentosComponent } from './components/alimentos/alimentos.component';
import { AlimentoComponent } from './components/alimento/alimento.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RecetaDetallesComponent } from './components/receta-detalles/receta-detalles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecetasComponent,
    RecetaComponent,
    AlimentosComponent,
    AlimentoComponent,
    LayoutComponent,
    RecetaDetallesComponent,
    IngredientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
