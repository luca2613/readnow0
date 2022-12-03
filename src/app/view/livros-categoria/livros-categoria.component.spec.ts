import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosCategoriaComponent } from './livros-categoria.component';

describe('LivrosCategoriaComponent', () => {
  let component: LivrosCategoriaComponent;
  let fixture: ComponentFixture<LivrosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
