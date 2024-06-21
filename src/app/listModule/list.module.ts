import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ListRoutingModule } from "./list-routing.module";
import { ListComponent } from "./list/list.component";
import { StudentsService } from "../Services/students.service";

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ScrollingModule,
    HttpClientModule,
  ],
  providers: [StudentsService],
})

export class ListModule {}