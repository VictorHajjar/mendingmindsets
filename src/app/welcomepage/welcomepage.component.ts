import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {CoursesComponent} from '../courses/courses.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(){

    this.router.navigate(['/courses']);
  }
}
