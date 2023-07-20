import { Injectable } from '@angular/core';
import { IStudent } from './students';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getDB(){
    return JSON.parse(localStorage.getItem("students") || "[]");
  }

  setDB( student: IStudent[]){
    localStorage.setItem("students", JSON.stringify( student ));
  }

}
