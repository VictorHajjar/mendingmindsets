import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
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
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
