import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService} from '../../services/firebase.service'
import { passwordValidator } from '../../directives/valid-password.directive';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  get email() { return this.loginForm.get('email') };
  get pass() { return this.loginForm.get('pass') };

  public loginForm = new FormGroup({
    mail: new FormControl('cristian.scholtz@gmail.com',[Validators.required, Validators.email]),
    pass: new FormControl('123456',[Validators.required, passwordValidator()])
  });

  public error;

  constructor(private authService: FirebaseService) { }

  ngOnInit() {

  }

  loginSubmit(){
    this.authService.login(this.loginForm.value.mail, this.loginForm.value.pass).then(
      res => {
        console.log(res);
        console.log('login exitoso');
        this.loginForm.reset;
      }
    ).catch (err => {
      this.error = err;
    })
  }

}
