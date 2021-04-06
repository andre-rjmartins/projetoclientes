import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';

const appRoutes : Routes = [
  { path : 'cadastro-clientes', component : CadastroClientesComponent },
  { path : 'consulta-clientes', component : ConsultaClientesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //registrando a biblioteca que será usada no projeto
    FormsModule, //registrando a biblioteca que será usada no projeto
    ReactiveFormsModule, //registrando a biblioteca que será usada no projeto
    RouterModule.forRoot(appRoutes) //registrando as rotas criadas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
