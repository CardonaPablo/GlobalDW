import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: any[] = []

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.api.get("recetas")
    .subscribe(
      (data) => {
        this.recetas = data.body
      }
    )
  }

  onDelete(id: number) {

  }
}
