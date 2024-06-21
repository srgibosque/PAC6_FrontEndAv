import { StudentsService } from './../../Services/students.service';
import { Component, OnInit } from '@angular/core';
import { StudentDTO } from '../../Models/studentDTO.interface';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  students: StudentDTO[] = [];

  constructor(private studentsService: StudentsService){}

  ngOnInit(){
    this.studentsService.getStudents().subscribe((data) => {
      this.students = data;
    })
  }

  trackById(index: number, student: StudentDTO){
    return student.id;
  }
}
