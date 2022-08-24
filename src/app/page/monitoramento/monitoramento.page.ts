import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.page.html',
  styleUrls: ['./monitoramento.page.scss'],
})
export class MonitoramentoPage implements OnInit {

  public cotacaoList = [
    {
      nome: "Bitcoin",
      cotacao: "0.053205 BTC",
      valor: "R$ 5.503,30",
      variacao: "2,59%",
      isAlta: true
    },
    {
      nome: "Cardano",
      cotacao: "251.48 ADA",
      valor: "R$ 5.503,30",
      variacao: "1,54%",
      isAlta: true
    },
    {
      nome: "Etherium",
      cotacao: "4554.234 ETH",
      valor: "R$ 5.503,30",
      variacao: "7,76%",
      isAlta: false
    },
    {
      nome: "Tether",
      cotacao: "53.453 USDT",
      valor: "R$ 1.345,00",
      variacao: "4,35%",
      isAlta: false
    }
  ];

  constructor() { 
    document.body.setAttribute("color-theme", "light");
  }

  ngOnInit() {
  }

}
