import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  ngOnInit(): void {
  }

  panleExpanded=false;

  constructor(private dialog:MatDialog) {}

 
  openAddDialog(){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      this.dialog.open(RegisterComponent,dialogConfig);
    }
  
}
