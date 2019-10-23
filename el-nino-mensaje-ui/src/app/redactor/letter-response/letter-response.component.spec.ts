import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterResponseComponent } from './letter-response.component';

describe('LetterResponseComponent', () => {
  let component: LetterResponseComponent;
  let fixture: ComponentFixture<LetterResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
