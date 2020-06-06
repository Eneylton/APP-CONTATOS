import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage({})
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  nome: string = "";
  telefone: string = "";
  email: string = "";
  whatsapp: string = "";
  hinstagram: string = "";
  facebook: string = "";
  cep: string = "";
  endereco: string = "";
  bairro: string = "";
  numero: string = "";
  cidade: string = "";
  estado: string = "";
  foto: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private serve: ServidorProvider,
  
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

  }

  buscarCep() {
    const cep = this.cep;

    this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .map(res => res.json()).subscribe(data => {
        console.log(data);
        this.endereco = data.logradouro;
        this.bairro = data.bairro;
        this.cidade = data.localidade;
        this.estado = data.uf;
      });



  }

  cadastrar() {
    let body = {
      nome: this.nome,
      telefone: this.telefone,
      email: this.email,
      whatsapp: this.whatsapp,
      hinstagram: this.hinstagram,
      facebook: this.facebook,
      cep: this.cep,
      endereco: this.endereco,
      bairro: this.bairro,
      numero: this.numero,
      cidade: this.cidade,
      estado: this.estado,
      foto: this.foto,
      crud: 'adicionar'
    };

    this.serve.postData(body,"servidor.php").subscribe(data => {
     
      this.showInsertOk();
    });

  }


  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('ListarPage')
          }
        }
      ]
    });
    alert.present();
  }

}


