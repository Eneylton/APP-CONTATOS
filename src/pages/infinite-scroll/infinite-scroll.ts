import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';


@IonicPage({})
@Component({
  selector: 'page-infinite-scroll',
  templateUrl: 'infinite-scroll.html',
})
export class InfiniteScrollPage {


  limit: number = 10;
  start: number = 0;

  lojas: any = [];
  todos: Array<{id:any, nome: string, email: string, telefone: string}>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private serve: ServidorProvider) {
  }

  ionViewDidLoad() {

    this.lojas = [];
    this.start = 0;
    this.listarloja();

  }

  doRefresh(event) {

    setTimeout(() => {

      this.ionViewDidLoad();
      event.complete();

    }, 800);
  }

  loadData(event: any) {
    this.start += this.limit;

    setTimeout(() => {
      this.listarloja().then(() => {
        event.complete();
      })
    }, 800);
  }

  listarloja() {

    return new Promise(resolve => {
      let body = {
        crud: 'listar-paramentro',
        limit: this.limit,
        start: this.start
      };
      this.serve.postData(body, "/servidor.php").subscribe(data => {
        for (let i = 0; i < data.result.length; i++) {

          this.lojas.push({
            id: data.result[i]["id"],
            nome: data.result[i]["nome"],
            email: data.result[i]["email"],
            telefone: data.result[i]["telefone"]
          });

        }

        resolve(true);

        this.todos = this.lojas;

      });
    });
  }

  getLojas(ev: any) {
    
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.lojas = this.todos.filter((loja) => {
        return (loja.nome.toLowerCase().indexOf(val.toLowerCase()) > -1)
               || (loja.email.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.lojas = this.todos;
    }
  }
}




