import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';



const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "home", component: FormComponent },

  { path: "edit/:studentName", loadChildren: () => import('./edit-student/edit-student.module').then(m => m.EditStudentModule) },
  // { path: "**", component: NaoEncontradaComponent},
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ]
})

export class AppRoutingModule{}