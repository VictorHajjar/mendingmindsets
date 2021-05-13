import { Injectable } from '@angular/core';
import { User } from './users.service';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
	baseUrl="http://localhost:8080";
  constructor(private core:CoreService) { }

  getAllCourses(){
  	return this.core.get(this.baseUrl+'/api/courses');
  }
}


export interface Course{
	courseId:string;
	title:string;
	topic:string;
	duration:number;
	location:string;
	date:string;
	userList: Array<User>;
	imagePath:string;
}