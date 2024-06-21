import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StaticsComponent } from "./statics/statics.component";
import { StaticsRoutingModule } from "./statics-routing.module";

@NgModule({
  declarations: [
    StaticsComponent,
  ],
  imports: [
    CommonModule,
    StaticsRoutingModule
  ],
})

export class StaticsModule {}