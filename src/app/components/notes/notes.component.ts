import { Component, OnInit } from '@angular/core';
import { NotesService } from '@app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  userNotes: string = ''; 

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.loadNotes(); 
  }

  saveNotes(): void {
    this.notesService.saveNotes(this.userNotes).subscribe(() => {
      console.log('Anotações salvas com sucesso!');
      alert('Anotações salvas com sucesso!');
    });
  }

  deleteNotes(): void {
    this.notesService.deleteNotes(1).subscribe(() => {
      console.log('Anotações excluídas com sucesso!');
      this.userNotes = ''; 
      alert('Anotações excluídas com sucesso!');
    });
  }

  private loadNotes(): void {
    this.notesService.getNotes().subscribe((data: any[]) => {
      if (data.length > 0) {
        this.userNotes = data[0].content; 
      }
    });
  }
}
