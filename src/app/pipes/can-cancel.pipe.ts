import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from '../interfaces/booking';

@Pipe({
  name: 'canCancel'
})
export class CanCancelPipe implements PipeTransform {
  transform(booking: Booking, ...args: any[]): boolean {
    const currentDate = new Date();
    return new Date(booking.startDate) > currentDate;
  }
}
