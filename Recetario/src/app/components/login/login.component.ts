import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    correo: new FormControl(null, [Validators.email, Validators.required]),
    contrasena: new FormControl(null, [Validators.required]),
  })

  constructor(
    private router:  Router,
    private api : ApiService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.post("login", this.login.value) 
    .subscribe(
      (data) => {
        console.log("response", data)
        if(data && data.body === true) {
          localStorage.setItem("user", this.login.value.correo)
          this.router.navigate(["/recetas"])
        }
      }
    )
  }

}
