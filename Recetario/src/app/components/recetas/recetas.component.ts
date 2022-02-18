import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: any[] = [
    {
      id: 1,
      nombre: "Enchiladas",
      ingredientes: "3/6",
      porciones: 2
    },
    {
      id: 2,
      nombre: "Caldo de Pollo",
      ingredientes: "0/9",
      porciones: 5
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {

  }
}
