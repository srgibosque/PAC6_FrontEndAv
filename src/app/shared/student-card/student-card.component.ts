import { Component, Input } from '@angular/core';
import { StudentDTO } from '../../Models/studentDTO.interface';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() student!: StudentDTO;
  constructor(){}
}
