import {Component, OnInit, Input} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EvaluationService} from "../evaluation.service";
@Component({selector: "app-vocabulary-test", templateUrl: "./vocabulary-test.component.html", styleUrls: ["./vocabulary-test.component.scss"]})
export class VocabularyTestComponent implements OnInit {
  @Input()vocabularyWords: Array<Object>;

  answerForm: FormGroup;
  correct: number = 0;
  wrong: number = 0;

  constructor(private formBuilder : FormBuilder, private evaluationService : EvaluationService) {}

  get nativeWord(): string {
    const nativeWords = Object.keys(this.vocabularyWords);
    return nativeWords.shift();
  }

  ngOnInit() {
    this.answerForm = this.formBuilder.group({
      answer: ["", Validators.required]
    });

    // this.randomizeArray(this.vocabularyWords);
  }

  randomizeArray(arr): void {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [
        newArr[i], newArr[rand]
      ] = [
        newArr[rand], newArr[i]
      ];
    }
    return (this.vocabularyWords = newArr);
  }

  submitAnswer() {
    const foreignWords = Object.values(this.vocabularyWords);
    if (foreignWords.shift() === this.answerForm.controls.answer.value) {
      this.correct++;
    } else {
      this.wrong--;
    }
  }
}
