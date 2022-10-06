import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grocery2DataComponent } from './grocery2-data.component';

describe('Grocery2DataComponent', () => {
  let component: Grocery2DataComponent;
  let fixture: ComponentFixture<Grocery2DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grocery2DataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grocery2DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
