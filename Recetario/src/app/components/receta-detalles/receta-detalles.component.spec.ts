import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaDetallesComponent } from './receta-detalles.component';

describe('RecetaDetallesComponent', () => {
  let component: RecetaDetallesComponent;
  let fixture: ComponentFixture<RecetaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
