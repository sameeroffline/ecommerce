import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDataComponent } from './mi-data.component';

describe('MiDataComponent', () => {
  let component: MiDataComponent;
  let fixture: ComponentFixture<MiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
