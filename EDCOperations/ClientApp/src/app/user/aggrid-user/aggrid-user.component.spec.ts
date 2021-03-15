import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridUserComponent } from './aggrid-user.component';

describe('AggridUserComponent', () => {
  let component: AggridUserComponent;
  let fixture: ComponentFixture<AggridUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggridUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
