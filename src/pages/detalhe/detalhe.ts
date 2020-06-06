import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  nome: string;
  telefone: string;
  email: string;
  whatsapp: string;
  hinstagram: string;
  facebook: string;
  cep: string;
  endereco: string;
  numero: string;
  cidade: string;
  bairro: string;
  estado: string;
  foto: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.nome = this.navParams.get('nome');
    this.telefone = this.navParams.get('telefone');
    this.email = this.navParams.get('email');
    this.whatsapp = this.navParams.get('whatsapp');
    this.hinstagram = this.navParams.get('hinstagram');
    this.facebook = this.navParams.get('facebook');
    this.cep = this.navParams.get('cep');
    this.endereco = this.navParams.get('endereco');
    this.numero = this.navParams.get('numero');
    this.cidade = this.navParams.get('cidade');
    this.bairro = this.navParams.get('bairro');
    this.estado = this.navParams.get('estado');

    
  }

}
