import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class EvaluationService {
  vocabulary: Array<Object>;

  constructor() {}

  setVocabularyList(vocabulary : Array<Object>): void {
    this.vocabulary = vocabulary;
  }
}
