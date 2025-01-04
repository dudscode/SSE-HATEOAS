package com.sse.server.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean isPreferredTicket;

    private String name;

    public Ticket(Long id, boolean isPreferredTicket, String name) {
        this.id = id;
        this.isPreferredTicket = isPreferredTicket;
        this.name = name;
    }
    public Ticket() {}
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isPreferredTicket() {
        return isPreferredTicket;
    }

    public void setPreferredTicket(boolean preferredTicket) {
        isPreferredTicket = preferredTicket;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
