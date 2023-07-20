import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student.component';


@NgModule({
  declarations: [
    EditStudentComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        { path: '', component: EditStudentComponent }
      ])
  ],
 
})

export class EditStudentModule { }
