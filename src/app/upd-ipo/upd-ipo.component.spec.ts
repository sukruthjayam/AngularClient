import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdIPOComponent } from './upd-ipo.component';

describe('UpdIPOComponent', () => {
  let component: UpdIPOComponent;
  let fixture: ComponentFixture<UpdIPOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdIPOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdIPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
