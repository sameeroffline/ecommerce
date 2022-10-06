import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivoDataComponent } from './vivo-data.component';

describe('VivoDataComponent', () => {
  let component: VivoDataComponent;
  let fixture: ComponentFixture<VivoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VivoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VivoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
