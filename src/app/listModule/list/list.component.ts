import { Component, OnInit } from '@angular/core';
import { StudentDTO } from '../../Models/studentDTO.interface';
import { StudentsService } from '../../Services/students.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  students: StudentDTO[] = [];

  constructor(private studentsService: StudentsService){}

  ngOnInit() {
    this.studentsService.getStudents().subscribe((data) => {
      this.students = data;
    })
  }
}
