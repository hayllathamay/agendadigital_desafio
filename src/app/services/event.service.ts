import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventInterface } from '@app/interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventInterface[]> {
    return this.http.get<EventInterface[]>(this.apiUrl);
  }

  addEvent(event: EventInterface): Observable<EventInterface> {
    return this.http.post<EventInterface>(this.apiUrl, event);
  }

  // saveEvent(eventData: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, eventData);
  // }

  updateEvent(id: any, body: EventInterface): Observable<EventInterface> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<EventInterface>(url, body);
  }

  deleteEvent(id: any): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}