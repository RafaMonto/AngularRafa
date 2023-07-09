import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  img = '../assets/img1.png';

  login = {
    email: null,
    pass: null
  }

  constructor(private loginService:LoginserviceService, private router: Router){}

  ngOnInit(): void {

  }

  loginUsuario(){
    this.loginService.loginUsuario(this.login).subscribe((datos: any) => {
      if (datos['resultado'] == 'Ok') {
        alert(datos['mensaje']);
        this.router.navigate(['/crud']);
      }
   });
  }

}
