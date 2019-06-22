import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {QuestionsFormComponent} from "./questions-form/questions-form.component";
import { VocabularyTestComponent } from './vocabulary-test/vocabulary-test.component';

@NgModule({
  declarations: [
    AppComponent, QuestionsFormComponent, VocabularyTestComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
