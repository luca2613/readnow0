import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorDetalheComponent } from './autor-detalhe.component';

describe('AutorDetalheComponent', () => {
  let component: AutorDetalheComponent;
  let fixture: ComponentFixture<AutorDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
