import { Component } from '@angular/core';
import { Booking } from '../../../interfaces/booking';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css',
})
export class MyBookingsComponent {
  bookings: Booking[] = [];
}
