import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesItemComponent } from './ordenes-item.component';

describe('OrdenesItemComponent', () => {
  let component: OrdenesItemComponent;
  let fixture: ComponentFixture<OrdenesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
