import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes =
  [
    {
      path: "loginmain", component: LoginComponent, pathMatch: "full",
      children: [
        { path: "login", component: LoginComponent, pathMatch: "full" },
        { path: "registerRegistro", component: RegisterComponent, pathMatch: "full" }

      ]
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
