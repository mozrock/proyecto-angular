import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../../services/catalogo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit{
  forma: FormGroup;
  pedido: any = {};
  pedidoSubmitted: boolean;
  data: any = {};
  file: any;
  pdfShow: any = '';

  // tslint:disable-next-line: max-line-length
  constructor( private router: ActivatedRoute,
               private catalogo: CatalogoService,
               private fb: FormBuilder,
               private sanitizer: DomSanitizer ) {

        this.router.params.subscribe( params => {
        // tslint:disable-next-line: no-string-literal
        this.getPedido( params['idProducto'] );

        this.crearFormulario();
    });
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  get NombreNovalido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  // tslint:disable-next-line: typedef
  get FechaNovalido(){
    return this.forma.get('fechaN').invalid && this.forma.get('fechaN').touched;
  }
  // tslint:disable-next-line: typedef
  get DireccionNovalido(){
    return this.forma.get('direccion').invalid && this.forma.get('direccion').touched;
  }
  // tslint:disable-next-line: typedef
  get CiudadNovalido(){
    return this.forma.get('ciudad').invalid && this.forma.get('ciudad').touched;
  }
  // tslint:disable-next-line: typedef
  get PdfNovalido(){
    return this.forma.get('pdf').invalid && this.forma.get('pdf').touched;
  }


      // tslint:disable-next-line: typedef
      getPedido( idProducto: string ){
        this.catalogo.getPedido(idProducto)
        .subscribe( (data: any) => {
            console.log(data);
            this.data = data;
        });
      }

      // tslint:disable-next-line: typedef
      crearFormulario(){
         this.forma = this.fb.group({
           nombre     : ['' , Validators.required ],
           fechaN     : ['' , Validators.required],
           direccion  : ['' , Validators.required],
           ciudad     : ['' , Validators.required],
           pdf        : ['' , Validators.required],
           pdfShowVar : ['']
         });
      }

      // tslint:disable-next-line: typedef
      guardar(){
        this.pedidoSubmitted = true;
        if (this.forma.valid){
        console.log(this.forma.value);
        this.pedido = Object.assign( this.pedido , this.forma.value);
        this.guardarPedidos(this.pedido);
        this.forma.reset();
        this.pedidoSubmitted = false;
        Swal.fire(
          'Buen trabajo!',
          'Tu pedido se almaceno correctamente!',
          'success'
        );
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!'
          });
        }
      }

      // tslint:disable-next-line: typedef
      guardarPedidos(pedido){
        let pedidos = [];
        if (localStorage.getItem('Pedidos') ){
          pedidos = JSON.parse(localStorage.getItem('Pedidos'));
          pedidos = [pedido, ...pedidos];
        } else {
          pedidos = [pedido];
        }
        localStorage.setItem('Pedidos', JSON.stringify(pedidos));
      }
// tslint:disable-next-line: typedef
    onFileChanged(event) {
      this.file = event.target.files[0];
      // tslint:disable-next-line: prefer-const
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => {
       // tslint:disable-next-line: no-angle-bracket-type-assertion
       this.pdfShow = (<FileReader> event.target).result;
       console.log(this.pdfShow);
     };
    }

    // tslint:disable-next-line: typedef
    sanitize(url: string){
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  }
