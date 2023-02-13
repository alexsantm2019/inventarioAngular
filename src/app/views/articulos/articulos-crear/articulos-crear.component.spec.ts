import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosCrearComponent } from './articulos-crear.component';

describe('ArticulosCrearComponent', () => {
  let component: ArticulosCrearComponent;
  let fixture: ComponentFixture<ArticulosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
