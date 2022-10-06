import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grocery2Component } from './grocery2.component';

describe('Grocery2Component', () => {
  let component: Grocery2Component;
  let fixture: ComponentFixture<Grocery2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grocery2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grocery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
