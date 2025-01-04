import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedTicketComponent } from './created-ticket.component';

describe('CreatedTicketComponent', () => {
  let component: CreatedTicketComponent;
  let fixture: ComponentFixture<CreatedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
