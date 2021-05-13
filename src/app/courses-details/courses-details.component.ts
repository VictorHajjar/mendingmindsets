import { Component, OnInit } from '@angular/core';
import { CoursesService, Course } from '../services/courses.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {
 courses:Array<Course>=[
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
 ];
  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
  	this.getAllCourses();
  }

  getAllCourses(){
      this.coursesService.getAllCourses().subscribe((resp:any)=>
        {this.courses=resp; 
        	console.log(this.courses)}
        )
  }
}
