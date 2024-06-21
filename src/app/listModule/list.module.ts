import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ListRoutingModule } from "./list-routing.module";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ],
})

export class ListModule {}