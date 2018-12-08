import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsandbullComponent } from './cowsandbull.component';

describe('CowsandbullComponent', () => {
  let component: CowsandbullComponent;
  let fixture: ComponentFixture<CowsandbullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowsandbullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowsandbullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
