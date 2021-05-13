import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { CoursesService, Course } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:Array<Course>=[];
  ngOnInit(): void {
    this.getAllCourses();
  }

  panleExpanded=false;

  constructor(private dialog:MatDialog, private coursesService:CoursesService) {}


  getAllCourses(){
      this.coursesService.getAllCourses().subscribe((resp:any)=>
        {this.courses=resp}
        )
  }
 
  openAddDialog(){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      this.dialog.open(RegisterComponent,dialogConfig);
    }
  
}
