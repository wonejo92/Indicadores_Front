import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrotePage } from './brote.page';

describe('BrotePage', () => {
  let component: BrotePage;
  let fixture: ComponentFixture<BrotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
