import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { VocabularyFormComponent } from "./vocabulary-form/vocabulary-form.component";
import { VocabularyTestComponent } from "./vocabulary-test/vocabulary-test.component";

@NgModule({
    declarations: [
        AppComponent,
        VocabularyFormComponent,
        VocabularyTestComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
