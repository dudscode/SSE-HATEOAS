import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTicketComponent } from './call-ticket.component';

describe('CallTicketComponent', () => {
  let component: CallTicketComponent;
  let fixture: ComponentFixture<CallTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
