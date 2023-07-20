import { Component } from '@angular/core';
import { IStudent } from '../students';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  nomeAluno = '';

  constructor(
    private studentService: StudentService,
    private router: Router

  ) { }

  pesquisar() {
    console.log(this.nomeAluno);
    
    if (this.nomeAluno) {
      this.router.navigate(['home'], { queryParams: {studentName: this.nomeAluno}});
      return;
    }

    this.router.navigate(['home']);
  }

}
