import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Course } from './courses.service';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
	baseUrl="http://localhost:8080";

  constructor(private core:CoreService) { }

  getUsers(){
  	return this.core.get(this.baseUrl+'/api/users');
  }

  addUser(body:User){
  	return this.core.post(this.baseUrl+'/api/users/add-user',body);
  }
}

export interface User{
	firstName:string;
	lastName:string;
	phone:string;
	email:string;
	course: Array<Course>;
}