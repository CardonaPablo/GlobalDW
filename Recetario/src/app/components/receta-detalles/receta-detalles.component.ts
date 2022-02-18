import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-receta-detalles',
  templateUrl: './receta-detalles.component.html',
  styleUrls: ['./receta-detalles.component.css']
})
export class RecetaDetallesComponent implements OnInit {

  id = null
  receta: any 

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.fetchData()
  }

  fetchData() {
    this.api.get(`receta/${this.id}`)
    .subscribe(
      ({ body }) => {
        this.receta = body
        console.log(this.receta)
      }
    )
  }

}
