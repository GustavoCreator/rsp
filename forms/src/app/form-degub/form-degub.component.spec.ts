import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDegubComponent } from './form-degub.component';

describe('FormDegubComponent', () => {
  let component: FormDegubComponent;
  let fixture: ComponentFixture<FormDegubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDegubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDegubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
