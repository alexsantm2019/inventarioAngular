import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosListaComponent } from './articulos-lista.component';

describe('ArticulosListaComponent', () => {
  let component: ArticulosListaComponent;
  let fixture: ComponentFixture<ArticulosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
