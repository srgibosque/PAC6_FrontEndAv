import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StaticsComponent } from "./statics/statics.component";
import { StaticsRoutingModule } from "./statics-routing.module";
import { GenderComponent } from "./statics/gender/gender.component";
import { GeneralResultsComponent } from "./statics/general-results/general-results.component";
import { ResumeDataComponent } from "./statics/resume-data/resume-data.component";
import { StudentsService } from "../Services/students.service";
import { HttpClientModule } from "@angular/common/http";
import { SpinnerComponent } from "../shared/spinner/spinner.component";

@NgModule({
  declarations: [
    StaticsComponent,
    ResumeDataComponent,
    GeneralResultsComponent,
    GenderComponent,
  ],
  imports: [
    CommonModule,
    StaticsRoutingModule,
    HttpClientModule,
    SpinnerComponent,
  ],
  providers: [StudentsService],
})

export class StaticsModule {}