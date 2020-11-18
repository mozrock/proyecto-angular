import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';
import { CatalogoService } from './services/catalogo.service';
import { PedidoComponent } from './components/pedido/pedido.component';
import { VerpedidoComponent } from './components/verpedido/verpedido.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PedidoComponent,
    VerpedidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
    CatalogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
