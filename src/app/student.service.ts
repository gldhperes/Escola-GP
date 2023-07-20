import { EventEmitter, Injectable } from '@angular/core';
import { IStudent, students } from './students';
import { DatabaseService } from './database.service';


@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private students: IStudent[] = students;
  studentAdded: EventEmitter<IStudent> = new EventEmitter<IStudent>();

  constructor(
    private database: DatabaseService,

  ) { }


  private getStudentsFromDB(): void {
    this.students = this.database.getDB();
    // console.log(this.students);
  }

  addStudent(_student: IStudent) {

    const sameStudent = this.students.some(stu => stu.nome === _student.nome)
    // console.log( "contem com mesmo nome? ", sameStudent );

    if (!sameStudent) {

      // Pega oq ja tem salvo
      this.getStudentsFromDB();

      // Calcula a media do novo estudante
      this.calculaAprovacao(_student);

      // Adiciona ele no array
      this.students.push(_student);

      // Envia o Array para o DB atualizar
      this.database.setDB(this.students);


      // console.log(this.students);
      return true;
    }

    return false;
  }

  getAll() {
    this.getStudentsFromDB();
    return this.students;
  }

  getOne(studentName: string) {
    this.getStudentsFromDB();
    const student = this.students.find(stu => stu.nome === studentName)

    return student
  }

  removeStudent(studentName: string) {
    const indice = this.students.findIndex(stu => stu.nome === studentName);
    if (indice !== -1) {
      this.students.splice(indice, 1);
      this.database.setDB(this.students);
    }

  }

  editStudent(student: IStudent) {
    this.removeStudent(student.nome);
    this.addStudent(student)
  }



  calculaAprovacao(stu: IStudent) {
    const media = (stu.nota1 + stu.nota2) / 2

    if (media >= 7.0) {
      stu.aprovado = "Aprovado";
    } else {
      stu.aprovado = "Reprovado";
    }
  }

}