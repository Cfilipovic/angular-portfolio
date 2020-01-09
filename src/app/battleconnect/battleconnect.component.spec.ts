import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleconnectComponent } from './battleconnect.component';

describe('BattleconnectComponent', () => {
  let component: BattleconnectComponent;
  let fixture: ComponentFixture<BattleconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
