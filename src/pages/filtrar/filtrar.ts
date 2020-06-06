import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';


@IonicPage({})
@Component({
  selector: 'page-filtrar',
  templateUrl: 'filtrar.html',
})
export class FiltrarPage {

  todos: Array<{id:any, nome: string, email: string, telefone: string}>;


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

    this.serve.postData(body, "servidor.php").subscribe(data => {
      for (let i=0; i < data.result.length; i++) {
    
       this.lojas.push({
        id: data.result[i]["id"],
        nome: data.result[i]["nome"],
        email: data.result[i]["email"],
        telefone: data.result[i]["telefone"]

       });

      }

      this.todos = this.lojas;

    });
  }

  getLojas(ev: any) {
    
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.lojas = this.todos.filter((loja) => {
        return (loja.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.lojas = this.todos;
    }
  }


}
