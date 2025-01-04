export interface ITicket {
  id: number;
  name: string;
  preferredTicket: boolean;
  idTicket?: number;
  links? :IHateoas[];
}
export interface IHateoas {
  rel: string;
  href: string;
}
export interface IPayloadTicket {
  name: string;
  preferredTicket: boolean;
}