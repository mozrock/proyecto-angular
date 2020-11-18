import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verpedido',
  templateUrl: './verpedido.component.html',
})
export class VerpedidoComponent implements OnInit {
  lista: any = {};
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
    this.lista = JSON.parse(localStorage.getItem('Pedidos'));
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void{
  }
}

