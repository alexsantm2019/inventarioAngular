import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosItemComponent } from './articulos-item.component';

describe('ArticulosItemComponent', () => {
  let component: ArticulosItemComponent;
  let fixture: ComponentFixture<ArticulosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
