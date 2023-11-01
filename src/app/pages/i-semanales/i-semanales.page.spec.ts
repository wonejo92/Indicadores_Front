import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ISemanalesPage } from './i-semanales.page';

describe('ISemanalesPage', () => {
  let component: ISemanalesPage;
  let fixture: ComponentFixture<ISemanalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ISemanalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
