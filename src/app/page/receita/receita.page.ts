import { Chart } from 'chart.js';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  public lineChart: any;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.lineChartMethod();
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: "",
            data: [10, 12, 10, 11, 10, 8, 7, 9, 9, 8, 9, 10, 2],
            tension: 0.6,
            pointRadius: 0,
            // fill: true,
            backgroundColor: "#42d487",
            borderColor: '#30d07c',
            // borderWidth: 2
          }
        ]
      },
      options: {
        scales: {
          x: {
            display: false,
            grid: {
              // display: false,
              // drawBorder: false,
              // borderWidth: 3,
              // drawOnChartArea: false,
              // lineWidth: 5,
              // drawTicks: false,
            },
          },
          y: {
            // beginAtZero: true,
            display: false
          },
          'y-axis': {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
              borderWidth: 3
            },
          },
        },
        elements: {
          line: {
            fill: true,
            tension: 0.5
          }
        },
        plugins: {
          legend: {
            display: false 
          },
        },
      },
    });
  }

}
