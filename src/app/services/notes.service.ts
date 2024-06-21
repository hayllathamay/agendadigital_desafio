import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteInterface } from '@app/interfaces/note';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiUrl = `${environment.apiBaseUrl}/notes`;

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any[]> {
    return this.http.get<NoteInterface[]>(this.apiUrl);
  }

  addNote(note: NoteInterface): Observable<NoteInterface> {
    return this.http.post<NoteInterface>(this.apiUrl, note);
  }

  saveNotes(noteContent: string): Observable<NoteInterface> {
    const note: NoteInterface = { title: 'User Note', content: noteContent}
    return this.http.post<NoteInterface>(this.apiUrl, note);
  }

  deleteNotes(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
