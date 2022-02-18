import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  isNew: boolean = false
  id = null
  receta = new FormGroup({
    nombre: new FormControl(null, [Validators.required]),
    detalles: new FormControl(null, [Validators.required]),
    porciones: new FormControl(1, [Validators.required])
  })
  alimentos: any[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    if(this.id === "new")
      this.isNew = true
    else
      this.fetchData()
  }

  fetchData() {
  }

  onSubmit() {
    this.router.navigate(["/recetas"])
  }


}
