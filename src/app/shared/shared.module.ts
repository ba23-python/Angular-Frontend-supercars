// shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisaPipe } from '../pipes/divisa.pipe'; // Import DivisaPipe
import { FormatDatePipe } from '../pipes/format-date.pipe';
import { CanCancelPipe } from '../pipes/can-cancel.pipe';

@NgModule({
  declarations: [
    FormatDatePipe,
    CanCancelPipe,
    // Remove DivisaPipe from declarations
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormatDatePipe,
    CanCancelPipe,
    // Export DivisaPipe
    DivisaPipe
  ]
})
export class SharedModule { }
