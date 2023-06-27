import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThousandSeparatorPipe} from "../pipes/thousand-separator.pipe";




@NgModule({
  declarations: [
    ThousandSeparatorPipe,
  ],
  exports: [
    ThousandSeparatorPipe,
  ],
})
export class ShareModuleModule { }
