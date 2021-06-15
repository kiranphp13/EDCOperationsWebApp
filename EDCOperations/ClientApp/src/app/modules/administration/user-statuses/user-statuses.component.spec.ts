import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusesComponent } from './user-statuses.component';

describe('UserStatusesComponent', () => {
  let component: UserStatusesComponent;
  let fixture: ComponentFixture<UserStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
