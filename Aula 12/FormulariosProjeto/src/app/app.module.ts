import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormsModule } from '@angular/forms';
import { ExemploDiretivasComponent } from './exemplo-diretivas/exemplo-diretivas.component';

@NgModule({
  declarations: [AppComponent, FormTemplateDrivenComponent, ExemploDiretivasComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
