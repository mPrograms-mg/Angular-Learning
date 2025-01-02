import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivePracticeComponent } from './diretive-practice.component';

describe('DiretivePracticeComponent', () => {
  let component: DiretivePracticeComponent;
  let fixture: ComponentFixture<DiretivePracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivePracticeComponent]
    });
    fixture = TestBed.createComponent(DiretivePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
