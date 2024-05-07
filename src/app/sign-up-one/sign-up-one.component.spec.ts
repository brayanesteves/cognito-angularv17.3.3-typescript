import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpOneComponent } from './sign-up-one.component';

describe('SignUpOneComponent', () => {
  let component: SignUpOneComponent;
  let fixture: ComponentFixture<SignUpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
