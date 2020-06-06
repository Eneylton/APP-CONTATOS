import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';


@IonicPage({})
@Component({
  selector: 'page-listar',
  templateUrl: 'listar.html',
})
export class ListarPage {

  lojas: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private serve: ServidorProvider) {

    this.lojas = [];
    this.listarloja();
  }



  formadd() {
    this.navCtrl.push('CadastroPage');
  }

  detalheForm(nome, telefone, email, whatsapp, hinstagram, facebook, cep, endereco, numero, bairro, cidade, estado, foto) {
    this.navCtrl.push('DetalhePage', {
      nome: nome,
      email: email,
      telefone: telefone,
      whatsapp: whatsapp,
      hinstagram: hinstagram,
      facebook: facebook,
      cep: cep,
      endereco: endereco,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      foto: foto
    })
  }

  listarloja() {
    let body = {

      crud: 'listar'

    };

    this.serve.postData(body, "/servidor.php").subscribe(data => {
      for (let loja of data.result) {
        this.lojas.push(loja);

        console.log(this.lojas);
      }
    });
  }

}
