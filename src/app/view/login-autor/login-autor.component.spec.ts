import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAutorComponent } from './login-autor.component';

describe('LoginAutorComponent', () => {
  let component: LoginAutorComponent;
  let fixture: ComponentFixture<LoginAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
