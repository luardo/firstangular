import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "second-ng";

    public vocabularyWords: Array<object> = [];

    get isVocabularyReady(): boolean {
        return Object.keys(this.vocabularyWords).length > 0;
    }

    vocabularyAdded(vocabulary: Array<object>) {
        this.vocabularyWords = vocabulary;
    }
}
