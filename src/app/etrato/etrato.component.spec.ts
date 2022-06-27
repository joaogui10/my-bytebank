import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtratoComponent } from './etrato.component';

describe('EtratoComponent', () => {
  let component: EtratoComponent;
  let fixture: ComponentFixture<EtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
