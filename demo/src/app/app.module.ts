import { Attribute,Component,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form } from '@angular/forms';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
