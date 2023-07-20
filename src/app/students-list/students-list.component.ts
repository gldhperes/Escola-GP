import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../students';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent {

  students: IStudent[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // Carrega a lista de estudantes
    this.loadStudents();

    // Cria uma variavel para receber a lista
    const studentList = this.students;

    this.activeRoute.queryParamMap.subscribe(params => {
      const studentName = params.get("studentName")?.toLocaleLowerCase();

      if (studentName) {
        this.students = studentList.filter(student => student.nome.toLowerCase().includes(studentName));
        return;
      }

      this.students = studentList;

    })



    this.studentService.studentAdded.subscribe(() => {
      this.loadStudents();
    });
  }

  private loadStudents() {
    this.students = this.studentService.getAll();
  }

  removeStudent(nomeAluno: string): void {
    console.log(nomeAluno!);

    this.studentService.removeStudent(nomeAluno);
    this.loadStudents();
  }

  updateStudentsList() {
    this.loadStudents();
  }

  editStudent(studentName: string) {
    this.router.navigate(["edit", studentName])
  }
}
