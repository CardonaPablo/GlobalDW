import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router:  Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    this.router.navigate(["/recetas"])
  }

}
