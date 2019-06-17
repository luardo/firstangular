import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {QuestionsFormComponent} from "./questions-form/questions-form.component";

@NgModule({
  declarations: [
    AppComponent, QuestionsFormComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
