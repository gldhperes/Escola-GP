import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { IStudent } from '../students';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

  student: IStudent | undefined;
  studentName: string = '';
  nome: string | undefined;
  nota1: number | undefined;
  nota2: number | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      this.studentName = params['studentName'];
      this.student = this.studentService.getOne(this.studentName)
      this.nome = this.student?.nome
      this.nota1 = this.student?.nota1
      this.nota2 = this.student?.nota2
    });

  }

  confirmEdition(): void {
    if ((this.nome != undefined) && (this.nota1 != undefined) && (this.nota2 != undefined)) {

      this.student = {
        nome: this.nome,
        nota1: this.nota1,
        nota2: this.nota2,
        aprovado: "Reprovado"
      }
    }

    if (this.student != undefined) {
      this.studentService.editStudent(this.student);
    }

    this.callHomePage();
  }

  

  cancelEdit(): void {
    this.callHomePage()
  }

  private callHomePage(): void {
    this.router.navigate(['home'])
  }

}
