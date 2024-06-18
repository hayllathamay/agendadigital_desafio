import { Component, OnInit } from '@angular/core';
//import { EventService } from '@app/services/event.service';
import { EventService } from '@app/services/event.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss'
})
export class AddEventComponent implements OnInit {
  event: any = {};

constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent(): void {
    this.eventService.saveEvent(this.event).subscribe(
      () =>{
        console.log('Evento salvo com sucesso"');
        alert('Evento salvo com sucesso!');
        this.event = {};
      },
      error => {
        console.error('Erro ao salvar evento:', error);
        alert('Erro a salvar evento. Verifique o console para obter mais dedtalhes');
      }
    );
  }
  /*saveEvent(): void {
    this.eventService.saveEvent(this.event).subscribe(() => {
      console.log('Evento salvo com sucesso!');
      alert('Evento salvo com sucesso!');
      this.event = {}; 
    })
  }*/
}
