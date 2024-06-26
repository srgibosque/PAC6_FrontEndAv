import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./home-routing.module";

import { StudentsService } from "../Services/students.service";
import { StudentCardComponent } from "../shared/student-card/student-card.component";
import { SpinnerComponent } from "../shared/spinner/spinner.component";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    StudentCardComponent,
    SpinnerComponent,
  ],
  providers: [StudentsService],
})

export class HomeModule {}