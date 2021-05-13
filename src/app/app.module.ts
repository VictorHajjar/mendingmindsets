import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreService } from './services/core.service';
import { CoursesService } from './services/courses.service';
import { UsersService } from './services/users.service';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomepageComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    RegisterComponent,
    CoursesDetailsComponent,
   
  ],
  entryComponents:[RegisterComponent],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule,
   HttpClientModule
   
  ],
  providers: [
    CoreService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
