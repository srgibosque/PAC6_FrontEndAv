import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-general-results',
  standalone: false,
  templateUrl: './general-results.component.html',
  styleUrl: './general-results.component.css'
})
export class GeneralResultsComponent implements OnInit{
  @Input() passedStudents!: number;
  @Input() failedStudents!: number;
  @Input() totalStudents!: number;

  passPercent!: number;
  failPercent!: number;
  chart!: Chart;

  constructor(){}

  ngOnInit(){
    this.calculatePercentages();

    const data = {
      labels: [
        'Pass',
        'Fail',
      ],
      datasets: [{
        label: 'Marks',
        data: [this.passPercent, this.failPercent],
        backgroundColor: [
          'rgb(140, 255, 159)',
          'rgb(236, 139, 122)',
        ],
        hoverOffset: 4,
        borderColor: [
          '#333333',
          '#333333',
        ],
        borderWidth: 2,
      }]
    };

    const config = {
      type: 'doughnut' as ChartType,
      data: data,
    };

    this.chart = new Chart('generalResultsDataChart', config);

  }

  private calculatePercentages(){
    if(this.totalStudents > 0){
      this.passPercent = (this.passedStudents/this.totalStudents)* 100;
      this.failPercent = (this.failedStudents/this.totalStudents)* 100;
    } else {
      this.passPercent = 0;
      this.failPercent = 0;
    }
  }

  
}
