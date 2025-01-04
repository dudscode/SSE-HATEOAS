package com.sse.server.Controllers;

import com.sse.server.Entities.Ticket;
import com.sse.server.Services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tickets")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @GetMapping
    public List<EntityModel<Ticket>> getAllTicket(){
        List<Ticket> tickets = ticketService.findAllTickets();
        return  tickets.stream().map(
                ticket ->  EntityModel.of(ticket, WebMvcLinkBuilder.linkTo(
                        WebMvcLinkBuilder.methodOn(TicketController.class).getTicketById(ticket.getId())
                ).withSelfRel(),
                        WebMvcLinkBuilder.linkTo(
                                WebMvcLinkBuilder.methodOn(TicketController.class).deleteTicket(ticket.getId())
                        ).withRel("delete")

                )).collect(Collectors.toList());

    }
    @GetMapping("number/{number}")
    public EntityModel<Ticket> getTicketById(@PathVariable Long number) {
        Ticket player = ticketService.findTicketById(number)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));

        Link selfLink = WebMvcLinkBuilder.linkTo(
                WebMvcLinkBuilder.methodOn(TicketController.class).getTicketById(number)
        ).withSelfRel();

        Link allPlayersLink = WebMvcLinkBuilder.linkTo(
                WebMvcLinkBuilder.methodOn(TicketController.class).getAllTicket()
        ).withRel("all-ticket");

        return EntityModel.of(player, selfLink, allPlayersLink);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/preferred")
    public List<EntityModel<Ticket>> getPreferredTicketsDesc() {
        List<Ticket> tickets = ticketService.getPreferredTicketsDesc();
        return  tickets.stream().map(
                ticket ->  EntityModel.of(ticket, WebMvcLinkBuilder.linkTo(
                                WebMvcLinkBuilder.methodOn(TicketController.class).getTicketById(ticket.getId())
                        ).withSelfRel(),
                        WebMvcLinkBuilder.linkTo(
                                WebMvcLinkBuilder.methodOn(TicketController.class).deleteTicket(ticket.getId())
                        ).withRel("delete"),
                        WebMvcLinkBuilder.linkTo(
                                WebMvcLinkBuilder.methodOn(TicketController.class).callTicket(ticket.getId())
                        ).withRel("callTicket")


                )).collect(Collectors.toList());
    }
    @GetMapping("/normal")
    public List<EntityModel<Ticket>> getNormalTicketsDesc() {
        List<Ticket> tickets = ticketService.getNormalTicketsDesc();
        return  tickets.stream().map(
                ticket ->  EntityModel.of(ticket, WebMvcLinkBuilder.linkTo(
                                WebMvcLinkBuilder.methodOn(TicketController.class).getTicketById(ticket.getId())
                        ).withSelfRel(),
                        WebMvcLinkBuilder.linkTo(
                                WebMvcLinkBuilder.methodOn(TicketController.class).deleteTicket(ticket.getId())
                        ).withRel("delete"),
                        WebMvcLinkBuilder.linkTo(
                                WebMvcLinkBuilder.methodOn(TicketController.class).callTicket(ticket.getId())
                        ).withRel("callTicket")

                )).collect(Collectors.toList());
    }

    @PostMapping
    public EntityModel<Ticket> addPlayer(@RequestBody Ticket ticket) {
        Ticket savedPlayer = ticketService.saveTicket(ticket);
        return EntityModel.of(savedPlayer,
                WebMvcLinkBuilder.linkTo(
                        WebMvcLinkBuilder.methodOn(TicketController.class).getTicketById(savedPlayer.getId())
                ).withSelfRel()
        );
    }
    @GetMapping(value = "/sse/{id}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter subscribe(@PathVariable("id") Long id) {
        return ticketService.addEmitter(id);
    }
    @PostMapping("/call/{id}")
    public ResponseEntity<Ticket> callTicket(@PathVariable("id") Long id) {
        ticketService.callTicketById(id);
        return ResponseEntity.ok().build();
    }
}
