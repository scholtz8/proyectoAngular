import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService} from '../../services/firebase.service'
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

public loginForm = new FormGroup({
  mail: new FormControl(''),
  pass: new FormControl('')
})

public error;

  constructor(private authService: FirebaseService) { }

  ngOnInit() {

  }

  loginSubmit(){
    this.authService.login(this.loginForm.value.mail, this.loginForm.value.pass).then(
      res => {
        console.log(res);
      }
    ).catch (err => {
      this.error = err;
    })
  }

}
