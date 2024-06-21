import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { StudentsService } from "../Services/students.service";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  providers: [StudentsService],
})

export class HomeModule {}