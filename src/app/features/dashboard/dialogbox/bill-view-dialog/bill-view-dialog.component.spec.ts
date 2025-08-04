import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillViewDialogComponent } from './bill-view-dialog.component';

describe('BillViewDialogComponent', () => {
  let component: BillViewDialogComponent;
  let fixture: ComponentFixture<BillViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillViewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
