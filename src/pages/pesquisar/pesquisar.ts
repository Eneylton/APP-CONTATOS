import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@IonicPage({})
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html',
})
export class PesquisarPage {

  lojas: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private serve: ServidorProvider) {
  }

  ionViewDidLoad() {

    this.lojas = [];
    this.listarloja();

  }

  listarloja() {
    let body = {

      crud: 'listar'

    };

    this.serve.postData(body,"servidor.php").subscribe(data => {
      for (let i=0; i < data.result.length; i++) {
    
       this.lojas.push({
        id: data.result[i]["id"],
        nome: data.result[i]["nome"],
        email: data.result[i]["email"],
        telefone: data.result[i]["telefone"]
       });

      }
    });
  }

}
