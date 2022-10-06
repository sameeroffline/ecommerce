import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grocery1DataComponent } from './grocery1-data.component';

describe('Grocery1DataComponent', () => {
  let component: Grocery1DataComponent;
  let fixture: ComponentFixture<Grocery1DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grocery1DataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grocery1DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
