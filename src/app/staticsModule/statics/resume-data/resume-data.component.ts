import { Component, Input } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';


@Component({
  selector: 'app-resume-data',
  standalone: false,
  templateUrl: './resume-data.component.html',
  styleUrl: './resume-data.component.css'
})
export class ResumeDataComponent {
  @Input() passedStudents!: number;
  @Input() failedStudents!: number;
  @Input() totalStudents!: number;
  chart!: Chart
  
  constructor(){}

  ngOnInit(){

    const data = {
      labels: ['Pass', 'Fail', 'Total'],
      datasets: [{
        label: 'Resume data',
        data: [this.passedStudents, this.failedStudents, this.totalStudents],
        backgroundColor: [
          'rgba(140, 255, 159, 0.5)',
          'rgba(236, 139, 122, 0.5)',
          'rgba(33, 33, 33, 0.2)',
        ],
        borderColor: [
          '#333333',
          '#333333',
          '#333333',
        ],
        borderWidth: 2
      }]
    };

    const config = {
      type: 'bar' as ChartType,
      data: data,
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      },
    }
    
    this.chart = new Chart('resumeDataChart', config);
  }

}
