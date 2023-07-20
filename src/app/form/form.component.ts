import { Component, EventEmitter } from '@angular/core';
import { IStudent } from '../students';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  private student: IStudent | undefined;
  nome: string | undefined;
  nota1: number | undefined;
  nota2: number | undefined;
  aprovado : string = 'Reprovado';


  constructor(
    private studentService: StudentService
  ) { }


  addStudent(): void {
    console.log(this.nome, this.nota1, this.nota2);


    if (this.nome && this.nota1 && this.nota2) {

      this.student = {
        nome: this.nome,
        nota1: this.nota1,
        nota2: this.nota2,
        aprovado: "Reprovado"
      }


      console.log(this.student);

      this.studentService.addStudent(this.student);
      this.studentService.studentAdded.emit(this.student);

      this.nome = '';
      this.nota1 = undefined;
      this.nota2 = undefined;

    }



  }

   


}
