import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdCompComponent } from './upd-comp.component';

describe('UpdCompComponent', () => {
  let component: UpdCompComponent;
  let fixture: ComponentFixture<UpdCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
