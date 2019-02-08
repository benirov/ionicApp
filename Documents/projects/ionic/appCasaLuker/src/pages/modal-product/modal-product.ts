import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-product',
  templateUrl: 'modal-product.html',
})
export class ModalProductPage {
  nombreProducto:string;
  CodigoBarras:string;
  LoteNumber:string;
  fechaVencimiento:string;
  cantidadProd:string;
  dataRange:string; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, private toastCtrl: ToastController) {
    this.closeModal;
    this.presentToast;
    let startDate = new Date(); 
      startDate.setDate(startDate.getDate()-30);
    let dformat = [startDate.getFullYear(),
                  startDate.getMonth()+1,
                   startDate.getDate()].join('-');
    this.dataRange = dformat;
  }

  // notify

  presentToast(message:string, duration:number = 3000, position:string = 'top', color:string = 'red') {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
      cssClass: "bg-color-toast-"+color,
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  ionViewDidLoad() {
  }

  closeModal(){
    console.log("nombreProducto", typeof(this.nombreProducto));
    console.log("CodigoBarras", this.CodigoBarras);
    console.log("LoteNumber", this.LoteNumber);
    console.log("fechaVencimiento", this.fechaVencimiento);
    console.log("cantidadProd", this.cantidadProd);
    if((this.nombreProducto == '' || typeof(this.nombreProducto) === 'undefined') || (this.CodigoBarras == '' || typeof(this.CodigoBarras) === 'undefined') || (this.LoteNumber == '' || typeof(this.LoteNumber) === 'undefined') || (this.fechaVencimiento == '' || typeof(this.fechaVencimiento) === 'undefined') || (this.cantidadProd == '' || typeof(this.cantidadProd) === 'undefined'))
    {
      
      this.presentToast("Todos los campos son requerido para agregar producto", 3000, 'top', 'blue');
    }else
    {
      let dataFormProduct:object = 
      [
            {"name": "Producto", value: this.nombreProducto},
            {"name": "CodigoBarras", value: this.CodigoBarras},
            {"name": "LoteNumber", value: this.LoteNumber},
            {"name": "fechaVencimiento", value: this.fechaVencimiento},
            {"name": "cantidadProd", value: this.cantidadProd},
      ];
      this.viewCtrl.dismiss(dataFormProduct);
    }
    
}

}
