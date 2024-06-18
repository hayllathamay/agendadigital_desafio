import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './views/home/home.component';
import { NotesService } from './services/notes.service';
import { EventService } from './services/add-event.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NotesComponent,
    AddEventComponent,
    RemindersComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [
    provideAnimationsAsync(),
    NotesService,
    EventService
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
