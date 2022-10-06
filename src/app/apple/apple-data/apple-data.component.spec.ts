import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleDataComponent } from './apple-data.component';

describe('AppleDataComponent', () => {
  let component: AppleDataComponent;
  let fixture: ComponentFixture<AppleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
