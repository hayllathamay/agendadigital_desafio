import { Component, OnInit } from '@angular/core';
import { NotesService } from '@app/services/notes.service';

interface Note {
  id?: number;
  title: string;
  content: string;
}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  newNote: Note = { title: '', content: '' };
  editinfNotes: Note | null = null
  userNotes: string = '';

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.fetchNotes();
    this.loadNotes();
  }

  fetchNotes(): void {
    this.notesService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  addNote(): void {
    if (this.newNote.title && this.newNote.content) {
      this.notesService.addNote(this.newNote).subscribe(note => {
        this.notes.push(note);
        this.newNote = { title: '', content: '' };
      });
    }
  }

  saveNotes(): void {
    if (this.userNotes) {
      this.notesService.saveNotes(this.userNotes).subscribe(() => {
        alert('Anotações salvas com sucesso!');
      });
    }
  }

    deleteNotes(id: number | undefined): void {
      if (id !== undefined){
        this.notesService.deleteNotes(id).subscribe(() => {
          this.notes = this.notes.filter(note => note.id !== id);
          alert('Anotações excluídas com sucesso!');
        });
      } else{
        console.error("ID da anotação é indefinida. Não é possível excluir")
      }
      
    }

  private loadNotes(): void {
    this.notesService.getNotes().subscribe((data: any[]) => {
      if (data.length > 0) {
        this.userNotes = data.map(note => note.content).join('\n');
      }
    });
  }
}
