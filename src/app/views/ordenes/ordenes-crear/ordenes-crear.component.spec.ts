import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesCrearComponent } from './ordenes-crear.component';

describe('OrdenesCrearComponent', () => {
  let component: OrdenesCrearComponent;
  let fixture: ComponentFixture<OrdenesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
