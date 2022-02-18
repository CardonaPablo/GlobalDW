import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receta-detalles',
  templateUrl: './receta-detalles.component.html',
  styleUrls: ['./receta-detalles.component.css']
})
export class RecetaDetallesComponent implements OnInit {

  id = null
  receta: any = {
    nombre: "Enchiladas",
    detalles: `
      - Freir tortillas\n
      - Hervir pollo\n
      - Sumergir en salsa\n
    `,
    porciones: 4
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.fetchData()
  }

  fetchData() {

  }

}
