import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fg : FormGroup ;


  constructor(private formBuilder : FormBuilder) {}


createForm(){
  this.fg = this.formBuilder.group(
    {email: ['',Validators.required],
    password: ['',Validators.required]
  }
  ) }

  submit(){

    console.log(this.fg.value)
    
  }


  ngOnInit(): void {
    this.createForm();
  }

}
