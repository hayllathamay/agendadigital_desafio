import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiUrl = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  saveNotes(notes: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { content: notes });
  }

  deleteNotes(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
