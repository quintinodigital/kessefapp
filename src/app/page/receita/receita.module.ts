import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { IonicModule } from '@ionic/angular';
import { ReceitaPageRoutingModule } from './receita-routing.module';
import { ReceitaPage } from './receita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  declarations: [ReceitaPage]
})
export class ReceitaPageModule {}
