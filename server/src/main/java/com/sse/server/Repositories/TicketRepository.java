package com.sse.server.Repositories;

import com.sse.server.Entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query("SELECT t FROM Ticket t WHERE t.isPreferredTicket = true ORDER BY t.id ASC")
    List<Ticket> findAllPreferredTicketsDesc();

    @Query("SELECT t FROM Ticket t WHERE t.isPreferredTicket = false ORDER BY t.id ASC")
    List<Ticket> findAllNormalTicketsDesc();
}
