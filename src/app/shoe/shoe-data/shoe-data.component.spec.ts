import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeDataComponent } from './shoe-data.component';

describe('ShoeDataComponent', () => {
  let component: ShoeDataComponent;
  let fixture: ComponentFixture<ShoeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
