import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  })
  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  async onRegister() {
    const {nombreCompleto, email, password} = this.registerForm.value;

    try {
      const user = await this.authService.register(nombreCompleto, email, password);
      if(user){
        this.router.navigate(['/verification-email']);
      }
    } catch (error) {
      console.log("Error -> " + error);
    }
    this.authService.register(nombreCompleto, email, password);
  }

}
