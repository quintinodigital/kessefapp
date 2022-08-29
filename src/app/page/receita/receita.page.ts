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
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            // fill: true,
            backgroundColor: "rgba(255, 99, 132, 1)",
            borderColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2
          }
        ]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
              borderWidth: 3,
              drawOnChartArea: false,
              lineWidth: 5,
              drawTicks: false,
            },
          },
          'y-axis': {
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
