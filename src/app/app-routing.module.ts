import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'monitoramento',
    pathMatch: 'full'
  },
  {
    path: 'monitoramento',
    loadChildren: () => import('./page/monitoramento/monitoramento.module').then( m => m.MonitoramentoPageModule)
  },
  {
    path: 'receita',
    loadChildren: () => import('./page/receita/receita.module').then( m => m.ReceitaPageModule)
  },
  {
    path: 'despesa',
    loadChildren: () => import('./page/despesa/despesa.module').then( m => m.DespesaPageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./page/transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
