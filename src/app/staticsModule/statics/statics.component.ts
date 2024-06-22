import { Component, OnInit } from '@angular/core';
import { StudentDTO } from '../../Models/studentDTO.interface';
import { StudentsService } from '../../Services/students.service';
import { StudentStatics } from '../../Models/studentStatics.interface';

@Component({
  selector: 'app-statics',
  standalone: false,
  templateUrl: './statics.component.html',
  styleUrl: './statics.component.css'
})
export class StaticsComponent implements OnInit{
  students: StudentDTO[] = [];
  studentStatics!: StudentStatics;

  constructor(private studentsService: StudentsService){}

  ngOnInit(){
    this.studentsService.getStudents().subscribe((data) => {
      this.students = data;
      this.studentStatics = this.studentsService.getStudentStatics(this.students);
    })
  }
}
