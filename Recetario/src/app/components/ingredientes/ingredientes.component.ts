import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

  @Input() edit: boolean = true
  alimentos: any[] = []
  ingredientes: any = []

  constructor() { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.alimentos = []
  }

}
