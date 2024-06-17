import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
