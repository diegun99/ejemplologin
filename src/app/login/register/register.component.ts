import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fg : FormGroup ;


  constructor(private formBuilder : FormBuilder) {}


createForm(){
  this.fg = this.formBuilder.group(
    {email: ['',Validators.required],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required],
  }
  ) }

  submit(){

    console.log(this.fg.value)
    
  }


  ngOnInit(): void {
    this.createForm();
  }
}
