import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorPainelComponent } from './autor-painel.component';

describe('AutorPainelComponent', () => {
  let component: AutorPainelComponent;
  let fixture: ComponentFixture<AutorPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
