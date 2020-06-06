import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltrarPage } from './filtrar';

@NgModule({
  declarations: [
    FiltrarPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltrarPage),
  ],
})
export class FiltrarPageModule {}
