import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
const routes: Routes = [
  {
    path:'welcome',component:WelcomepageComponent
  },
  {
    path:'', redirectTo:'/welcome',pathMatch:'full'
  },
  {
    path:'about',component:AboutComponent

  },
  {
    path:'contact',component:ContactComponent

  },
 {
   path:'courses',component:CoursesDetailsComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

