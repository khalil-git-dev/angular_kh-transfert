import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartopComponent } from './bartop.component';

describe('BartopComponent', () => {
  let component: BartopComponent;
  let fixture: ComponentFixture<BartopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
