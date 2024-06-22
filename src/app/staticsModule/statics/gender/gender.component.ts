import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';

@Component({
  selector: 'app-gender',
  standalone: false,
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.css'
})
export class GenderComponent implements OnInit{
  @Input() maleStudents!: number;
  @Input() femaleStudents!: number;
  chart!: Chart

  constructor(){}

  ngOnInit(){
    const data = {
      labels: [
        'Male',
        'Female',
      ],
      datasets: [{
        label: 'Gender',
        data: [this.maleStudents, this.femaleStudents],
        backgroundColor: [
          'rgb(55, 55, 55)',
          'rgb(88, 88, 88)',
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
      type: 'pie' as ChartType,
      data: data,
    };

    this.chart = new Chart('genderDataChart', config);
  }

}
