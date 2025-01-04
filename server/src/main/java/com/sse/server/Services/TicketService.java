package com.sse.server.Services;

import com.sse.server.Entities.Ticket;
import com.sse.server.Entities.TicketCalled;
import com.sse.server.Repositories.TicketCalledRepository;
import com.sse.server.Repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private TicketCalledRepository ticketCalledRepository;

    public SseEmitter addEmitter(Long senha) {
        SseEmitter emitter = new SseEmitter();
        emitters.add(emitter);

        return emitter;
    }

public void callTicketById(Long id) {
    Optional<Ticket> ticket = findTicketById(id);
    if (ticket.isEmpty()){
        throw new RuntimeException("Ticket com ID " + id + " não encontrado.");
    }
    saveTicketCalled(ticket.get());
    ticketRepository.deleteById(ticket.get().getId());
    for (SseEmitter emitter : emitters) {
//        emitter.onTimeout(() -> emitters.remove(emitter));
        try {
            emitter.send(ticket);
        } catch (Exception e) {
            emitter.completeWithError(e);
        }
    }
}
public List<TicketCalled> ticketCalled(){

        if(findAllTicketsCalled().size() < 5){
            return findAllTicketsCalled();
        }
        return ticketCalledRepository.findAll().subList(Math.max(findAllTicketsCalled().size() - 5, 0), findAllTicketsCalled().size());
}

    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();
    public List<Ticket> findAllTickets() {
        return ticketRepository.findAll();
    }
    public List<TicketCalled> findAllTicketsCalled(){
        return  ticketCalledRepository.findAll();
    }
    public TicketCalled saveTicketCalled (Ticket t){
        TicketCalled ticket = new TicketCalled(null,t.getName(), t.getId() );
        return  ticketCalledRepository.save(ticket);
    }
    public Optional<Ticket> findTicketById(Long id){
        return ticketRepository.findById(id);
    }

    public Ticket saveTicket (Ticket ticket){
        return  ticketRepository.save(ticket);
    }

    public void deleteTicket(Long idTicket){
        ticketRepository.deleteById(idTicket);
    }
    public List<Ticket> getPreferredTicketsDesc() {
        return ticketRepository.findAllPreferredTicketsDesc();
    }

    public List<Ticket> getNormalTicketsDesc() {
        return ticketRepository.findAllNormalTicketsDesc();
    }
}
