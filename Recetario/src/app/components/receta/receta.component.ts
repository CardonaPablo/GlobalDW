import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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
    descripcion: new FormControl(null, [Validators.required]),
    porciones: new FormControl(1, [Validators.required])
  })
  alimentos: any[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    if(this.id === "new")
      this.isNew = true
    else
      this.fetchData()
  }

  fetchData() {
    this.api.get(`receta/${this.id}`)
    .subscribe(
      ({ body }) => {
        console.log(body);
        this.receta.patchValue(body)
      }
    )
  }

  onSubmit() {
    let call = null
    if(this.isNew)
      call = this.api.post("recetas", { ...this.receta.value, usuario_id: localStorage.getItem("user") })
    else
      call = this.api.put(`receta/${this.id}`, { ...this.receta.value, usuario_id: localStorage.getItem("user") })
    
    call.subscribe(
      ({body}) => {
        console.log(body)
        this.router.navigate(["/recetas"])
      }
    )
  }


}
