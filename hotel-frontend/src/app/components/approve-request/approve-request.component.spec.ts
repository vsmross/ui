import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRequestComponent } from './approve-request.component';

describe('ApproveRequestComponent', () => {
  let component: ApproveRequestComponent;
  let fixture: ComponentFixture<ApproveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveRequestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveRequestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
