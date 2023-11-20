import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import Login from 'src/app/models/Login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {

message!: string;

userLogin: any = {
  email: '',
  password: ''
}

constructor(
  private authService: AuthService,
  private router: Router) {}

login(){
  this.authService.login(this.userLogin)
  .pipe(catchError((error: any) =>{
    if(error.status == 404){
      this.message = 'Email ou senha invalida'
      return error;
    }
  }))
  .subscribe(
    () => {
      this.router.navigate(['/products']);
  })

}

cancelar(){

}

}
