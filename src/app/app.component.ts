import {Component} from "@angular/core";

@Component({selector: "app-root", templateUrl: "./app.component.html", styleUrls: ["./app.component.scss"]})
export class AppComponent {
  title = "second-ng";

  public words: Array<object> = [];

  get isVocabularyReady(): boolean {
    return Object.keys(this.words).length > 0;
  }

  vocabularyAdded(vocabulary : Array<Object>) {
    this.words = vocabulary;
  }
}
