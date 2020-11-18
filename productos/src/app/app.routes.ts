import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { VerpedidoComponent } from './components/verpedido/verpedido.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pedido/:idProducto', component: PedidoComponent },
    { path: 'verpedido', component: VerpedidoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

