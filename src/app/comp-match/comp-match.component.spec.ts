import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMatchComponent } from './comp-match.component';

describe('CompMatchComponent', () => {
  let component: CompMatchComponent;
  let fixture: ComponentFixture<CompMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
