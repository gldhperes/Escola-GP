import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StudentService } from './student.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormModule } from './form/form.module';
import { EditStudentModule } from './edit-student/edit-student.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [  
    HeaderComponent,
    AppComponent,
    FooterComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormModule,
    EditStudentModule,
  ],
 
  providers: [
    StudentService,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
