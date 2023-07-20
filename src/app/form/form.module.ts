import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { StudentsListComponent } from '../students-list/students-list.component';

@NgModule({
  declarations: [
    FormComponent,
    SearchBarComponent,
    StudentsListComponent,
  ],
  
  imports: [
    CommonModule,
    FormsModule,
  ],
 
  providers: [
   
  ],
  
  bootstrap: []
})
export class FormModule { }
