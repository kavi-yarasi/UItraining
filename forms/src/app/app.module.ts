import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { RfcComponent } from './rfc/rfc.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    RfcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
