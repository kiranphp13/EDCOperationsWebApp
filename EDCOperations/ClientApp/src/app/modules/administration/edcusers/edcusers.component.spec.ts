import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdcusersComponent } from './edcusers.component';

describe('EdcusersComponent', () => {
  let component: EdcusersComponent;
  let fixture: ComponentFixture<EdcusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdcusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdcusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
