import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypopressGameComponent } from './hypopress-game.component';

describe('HypopressGameComponent', () => {
  let component: HypopressGameComponent;
  let fixture: ComponentFixture<HypopressGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypopressGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypopressGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
