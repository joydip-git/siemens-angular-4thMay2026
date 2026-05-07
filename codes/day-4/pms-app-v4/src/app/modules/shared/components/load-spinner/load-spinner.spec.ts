import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSpinner } from './load-spinner';

describe('LoadSpinner', () => {
  let component: LoadSpinner;
  let fixture: ComponentFixture<LoadSpinner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadSpinner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadSpinner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
