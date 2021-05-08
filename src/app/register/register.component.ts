import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ClientForm:FormGroup;

  constructor(private builder: FormBuilder,private dialog:MatDialog, private dialogRef:MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) data:any 
     ) {
    this.ClientForm=this.builder.group({
      shipmentId: new FormControl('', [Validators.required, Validators.minLength(3)]),
      shipmentTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone:new FormControl(''),
      email:new FormControl(''),
    })
   }

  ngOnInit(): void {
  }

}


