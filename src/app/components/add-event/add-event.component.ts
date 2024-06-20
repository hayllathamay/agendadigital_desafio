import { Component, OnInit } from '@angular/core';
import { EventInterface } from '@app/interfaces/event';
import { EventService } from '@app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss'
})
export class AddEventComponent implements OnInit {
  events: EventInterface[] = [];
  newEvent: EventInterface = { title: '', description: '', date: '' };
  editingEvent: EventInterface | null = null;
  id: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getEvents().subscribe(
      (events: EventInterface[]) => {
        this.events = events.map((event: EventInterface) => ({
          id: event.id,
          title: event.title,
          description: event.description,
          date: event.date
        }));
      });
  }

  addEvent(): void {
    if (this.editingEvent) {
      this.eventService.updateEvent(this.id, this.newEvent).subscribe((updatedEvent: any) => {
        const index = this.events.findIndex(e => e.id === updatedEvent.id);
        if (index !== -1) {
          this.events[index] = updatedEvent;
          this.newEvent = { title: '', description: '', date: '' };
          this.editingEvent = null;
          alert('Evento atualizado com sucesso!');
        }
      });
    } else {
      this.eventService.addEvent(this.newEvent).subscribe(
        (events: EventInterface) => {
          this.events.push(events);
          this.newEvent = { title: '', description: '', date: '' };
          alert('Evento adicionado com sucesso!');
        }, error => {
          console.error('Erro ao adicionar evento:', error);
          alert('Erro ao adicionar evento. Verifique o console para mais detalhes.');
        });
    }
  }

  editEvent(event: EventInterface): void {
    this.editingEvent = { ...event };
    this.newEvent = { ...event };
    this.id = this.editingEvent.id;
  }

  deleteEvent(id: any): void {
    this.eventService.deleteEvent(id).subscribe(() => {
      this.events = this.events.filter(event => event.id !== id);
      alert('Evento excluído com sucesso!');
    }, error => {
      console.error('Erro ao excluir evento:', error);
      alert('Erro ao excluir evento. Verifique o console para mais detalhes.');
    });
  }
}
