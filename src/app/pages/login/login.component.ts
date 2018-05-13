import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  public router: Router;
  public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  public invalidLogin:boolean;

  constructor(router:Router, fb:FormBuilder, private user: UserService) {
      this.router = router;
      this.form = fb.group({
          'username': ['', Validators.compose([Validators.required])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
      });

      this.username = this.form.controls['username'];
      this.password = this.form.controls['password'];
      this.invalidLogin = false;
  }

  public onSubmit(values:Object):void {
      if (this.form.valid) {
          console.log(values);
          this.user.login(values).subscribe(
              response => {
                  if(response) {
                    this.router.navigate(['pages/dashboard']);
                  } else {
                    this.invalidLogin = true;
                  }
              }
          );
      }
  }

  ngAfterViewInit(){
      document.getElementById('preloader').classList.add('hide');                 
  }

}

export function emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}
