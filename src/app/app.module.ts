import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Toast } from './toast';
import { ToastsContainer } from './toast-container.component';
import { FormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    NavComponent,
    CreateComponent,
    EditComponent,
    ToastsContainer
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule, NgxCaptchaModule, ReactiveFormsModule],
  providers: [Toast],
  bootstrap: [AppComponent]
})
export class AppModule { }
