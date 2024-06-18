import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'] // Corrigido para styleUrls
})
export class CalendarComponent implements OnInit {
  currentYear: number;
  currentMonth: number;
  weeks: any[];
  daysInMonth: number[]; 
  weekDays: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.weeks = this.generateCalendar(this.currentMonth, this.currentYear);
    this.daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
  }
  
  ngOnInit(): void {}

  generateCalendar(month: number, year: number): any[] {
    const weeks = [];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day++);
        }
      }
      weeks.push(week);
    }
    return weeks;
  }

  getDaysInMonth(month: number, year: number): number[] {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.weeks = this.generateCalendar(this.currentMonth, this.currentYear);
    this.daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear); // Atualizando daysInMonth
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.weeks = this.generateCalendar(this.currentMonth, this.currentYear);
    this.daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear); // Atualizando daysInMonth
  }

  updateCalendar(): void {
    this.weeks = this.generateCalendar(this.currentMonth, this.currentYear);
    this.daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
  }

  getMonthName(month: number): string {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return months[month];
  }
}
