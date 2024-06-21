import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Observable, catchError, map, of } from 'rxjs';
import { StudentDTO } from '../Models/studentDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private csvUrl = 'assets/notas_alumnos.csv';

  constructor(private http:HttpClient, private papa: Papa) { }

  getStudents(): Observable<StudentDTO[]> {
    return this.http.get(this.csvUrl, {responseType: 'text'}).pipe(
      map((data) => {
        const parsedData = this.papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log(result);
          },
        });

        const students: StudentDTO[] = parsedData.data.map((item: any) => ({
          id: item.ID_Alumno,
          nombre: item.Nombre,
          apellidos: item.Apellidos,
          sexo: item.Sexo,
          nota: parseFloat(item.Nota_Final),
          faltas_asistencia: parseInt(item.Faltas_Asistencia, 10)
        }));

        return students;
      }),
      catchError((error) => {
        console.error('Error loading the csv file', error);
        return of([]);
      })
    );
  }
}
