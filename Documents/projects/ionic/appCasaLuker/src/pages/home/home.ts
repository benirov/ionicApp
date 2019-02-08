import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import * as dataCategoria  from '../../assets/data/categoria.js';
import * as dataSolicitud  from '../../assets/data/tipo_solicitud.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  List:any[] = [];
  Solicitante:any;
  CategoryItem:any[] = [];
  SolicitudItem:any[] = [];
  isEnabledDependencia:boolean = true;
  isEnabledCategoria:boolean = true;
  isEnabledTipoSolicitud:boolean = true;
  img1Preview:any; 

    // dataModal:any[] = [];

  constructor(public navCtrl: NavController, public modalCtrl : ModalController) {
  this.List.push(
    {
      name: 'Casa luker'
    });

    this.Solicitante = "1";
    this.isEnabledDependencia = false;

    // this.onChangeSolicitante;
    this.onChangeDependencia;
    this.onChangeCategoria;
    this.fileUpload;
    // this.openModal;
  }


  // onChangeSolicitante(value:any) {
  //   console.log("aqui");
  //   if(Number(value) != 0 )
  //   {
  //     this.isEnabledDependencia = false;
  //   }
  // }

  fileUpload($event)
  {

    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();
  
    //   reader.onload = (event:any) => {
    //     this.img1Preview = (<FileReader>event.target).result;
    //   }
  
    //   reader.readAsDataURL(event.target.files[0]);
    // }

  }


  onChangeDependencia(value:any) 
  {
    if(Number(value) != 0 )
    { 
      this.isEnabledCategoria = false;
      // let categoriaObj:any = document.querySelector("#categoria");
      switch(Number(value))
      {

        case 0:
                
                
        break;


        case 1:
              this.CategoryItem = dataCategoria.calidad;
        break;
        case 2:
              this.CategoryItem = dataCategoria.logistica; 
        break;
        case 3:
                this.CategoryItem = dataCategoria.Comercial;           
        break;
        case 4:
                this.CategoryItem = dataCategoria.Cartera;      
        break;
        case 5:
                this.CategoryItem = dataCategoria.Nomina;   
        break;
        case 6:
                this.CategoryItem = dataCategoria.ServicioCliente;       
        break;
    };

    this.isEnabledCategoria = false;
  }

}


onChangeCategoria(value:any) 
  {    
    if(Number(value) != 0 )
    { 
      // let solicitudObj:any = document.querySelector("#tiposolicitud"); 
      switch(Number(value))
      {

        case 0:
                
                
        break;

        case 1:
              this.SolicitudItem = dataSolicitud.Cafe;
        break;
        case 2:
              this.SolicitudItem = dataSolicitud.Chocolate; 
        break;
        case 3:
              this.SolicitudItem = dataSolicitud.Snacks;           
        break;
        case 4:
              this.SolicitudItem = dataSolicitud.Aseo;      
        break;
        case 5:
              this.SolicitudItem = dataSolicitud.Enlatados;   
        break;
        case 6:
              this.SolicitudItem = dataSolicitud.Procoval;       
        break;
        case 7:
              this.SolicitudItem = dataSolicitud.JGB;       
        break;
        case 8:
        this.SolicitudItem = dataSolicitud.Team;       
        break;
        case 9:
        this.SolicitudItem = dataSolicitud.Ferrero;       
        break;
        case 10:
        this.SolicitudItem = dataSolicitud.RelacionadoAlProducto;       
        break;
        case 11:
        this.SolicitudItem = dataSolicitud.RelacionadoAlPedidoEntrega;       
        break;
        case 12:
        this.SolicitudItem = dataSolicitud.Cotizaciones;       
        break;
        case 13:
        this.SolicitudItem = dataSolicitud.RutaVisitasVendedor;       
        break;
        case 14:
        this.SolicitudItem = dataSolicitud.Certificados;       
        break;
        case 15:
        this.SolicitudItem = dataSolicitud.SolicitudesDeComprayOtros;       
        break;
        case 16:
        this.SolicitudItem = dataSolicitud.Referencias;       
        break;
        case 17:
        this.SolicitudItem = dataSolicitud.BolsaDeEmpleo;       
        break;
        case 18:
        this.SolicitudItem = dataSolicitud.ServicioCliente;       
        break;
    };

    this.isEnabledTipoSolicitud = false;
  }

}

// metodo para modal

openModal()
{
    var modalPage = this.modalCtrl.create('ModalProductPage');
    modalPage.present();
    modalPage.onDidDismiss(data => {

      let dataHTMLString:any = ''; 

      console.log (data[0].value);

      dataHTMLString = '<li>'+
                            '<a href="#" class="acc-handle" tabindex="0">'+data[0].value+'</a>'+
                            '<div class="acc-panel">'+
                                '<ion-label  class=text-danger>'+data[1].value+'</ion-label>'+
                                '<ion-label  class=text-danger>'+data[2].value+'</ion-label>'+
                                '<ion-label  class=text-danger>'+data[3].value+'</ion-label>'+
                                '<ion-label  class=text-danger>'+data[4].value+'</ion-label>'+
                            '</div>'+
                          '</li>';

      document.querySelector("#ListProduct").innerHTML += dataHTMLString;



                          
      console.log (dataHTMLString);
    });
}

}
