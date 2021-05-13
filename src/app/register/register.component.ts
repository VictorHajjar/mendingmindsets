import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersService, User } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ClientForm:FormGroup;

  constructor(private userService: UsersService,private builder: FormBuilder,private dialog:MatDialog, private dialogRef:MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any 
     ) {
    this.ClientForm=this.builder.group({
      Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      FamilyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone:new FormControl(''),
      email:new FormControl(''),
    })
   }

  ngOnInit(): void {
  }

  submit(){

    let firstName=this.ClientForm.value.Name;
    let lastName=this.ClientForm.value.FamilyName;
    let email=this.ClientForm.value.email;
    let phone=this.ClientForm.value.phone;
    let course=this.data.course;
    const body:User={
      firstName,
      lastName,
      email,
      phone,
      course
    }
    this.userService.addUser(body).subscribe((resp:any)=>{
      this.dialogRef.close();
    })
  }

}


