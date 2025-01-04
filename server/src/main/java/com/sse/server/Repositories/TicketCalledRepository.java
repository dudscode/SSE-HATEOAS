package com.sse.server.Repositories;

import com.sse.server.Entities.Ticket;
import com.sse.server.Entities.TicketCalled;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TicketCalledRepository extends JpaRepository<TicketCalled, Long> {
}
