import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { CoursesService, Course } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() course:Course=
    {
     "courseId":"",
    "title":"",
    "topic":"",
    "duration":0,
    "location":"",
    "date":"",
    "userList": [],
    "imagePath": ""
   }
  
  ngOnInit(): void {
    
  }

  panleExpanded=false;

  constructor(private dialog:MatDialog) {}


  
 
  openAddDialog(){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.data={"course":this.course};
      this.dialog.open(RegisterComponent,dialogConfig);
    }
  
}
