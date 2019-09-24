import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteLetterComponent } from './write-letter.component';

describe('WriteLetterComponent', () => {
  let component: WriteLetterComponent;
  let fixture: ComponentFixture<WriteLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
